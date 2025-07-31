import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import { createProxyMiddleware } from 'http-proxy-middleware'
import * as jwt from 'jsonwebtoken'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware de seguridad
app.use(helmet())
app.use(cors())
app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas solicitudes desde esta IP'
})
app.use(limiter)

// Middleware de autenticación
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  const publicRoutes = ['/api/auth/login', '/api/auth/register', '/health']
  const isPublicRoute = publicRoutes.some(route => req.path.startsWith(route))
  
  if (isPublicRoute) {
    return next()
  }

  if (!token) {
    return res.status(401).json({ error: 'Token de acceso requerido' })
  }

  jwt.verify(token, process.env.JWT_SECRET || 'your-super-secret-jwt-key-here', (err: any, user: any) => {
    if (err) return res.status(403).json({ error: 'Token inválido' })
    req.user = user
    next()
  })
}

app.use(authenticateToken)

// Configuración de proxies
const services = {
  auth: { target: 'http://localhost:3001', prefix: '/api/auth' },
  users: { target: 'http://localhost:3002', prefix: '/api/users' },
  songs: { target: 'http://localhost:3003', prefix: '/api/songs' },
  rights: { target: 'http://localhost:3004', prefix: '/api/rights' },
  chat: { target: 'http://localhost:3005', prefix: '/api/chat' },
  notifications: { target: 'http://localhost:3006', prefix: '/api/notifications' }
}

Object.entries(services).forEach(([name, config]) => {
  app.use(
    config.prefix,
    createProxyMiddleware({
      target: config.target,
      changeOrigin: true,
      pathRewrite: { [`^${config.prefix}`]: '' },
      onError: (err, req, res) => {
        console.error(`Error en ${name} service:`, err)
        res.status(503).json({ 
          error: `Servicio ${name} no disponible`,
          service: name 
        })
      }
    })
  )
})

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

app.listen(PORT, () => {
  console.log(`🚀 API Gateway running on port ${PORT}`)
})