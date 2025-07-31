# 🎵 Music Rights Platform

Una plataforma completa de gestión de derechos musicales construida con microservicios, Next.js y Docker.

## 🏗️ Arquitectura

Este proyecto utiliza una arquitectura de microservicios con los siguientes componentes:

### Backend (Microservicios)
- **API Gateway**: Enrutamiento y autenticación centralizada
- **Auth Service**: Gestión de usuarios y autenticación JWT
- **User Service**: Gestión de perfiles de usuario
- **Song Service**: Gestión de canciones y metadatos
- **Rights Service**: Gestión de derechos musicales
- **Chat Service**: Sistema de mensajería en tiempo real
- **Notification Service**: Sistema de notificaciones

### Frontend
- **Next.js**: Aplicación web moderna con React y TypeScript
- **TailwindCSS**: Estilos responsive y modernos

### Infraestructura
- **PostgreSQL**: Base de datos para auth y users
- **Redis**: Cache y sesiones
- **RabbitMQ**: Message broker para comunicación entre servicios
- **Grafana**: Monitoreo y métricas
- **Docker**: Containerización de todos los servicios

## 🚀 Instalación y Configuración

### Prerequisitos
- Docker y Docker Compose
- Node.js 18+ y npm
- Git

### Instalación Rápida (Windows)

1. Clona el repositorio:
```bash
git clone https://github.com/alexanderv10/WebAvanzadasP.git
cd WebAvanzadasP
```

2. Ejecuta el script de configuración:
```bash
.\scripts\setup-windows.bat
```

### Instalación Manual

1. Instala las dependencias del frontend:
```bash
cd frontend
npm install
cd ..
```

2. Inicia los servicios con Docker:
```bash
docker-compose up -d
```

3. Espera a que todos los servicios estén listos (aproximadamente 30 segundos)

## 🌐 Acceso a la Aplicación

Una vez que todos los servicios estén ejecutándose:

- **Frontend**: http://localhost:3000
- **Grafana Dashboard**: http://localhost:3001
  - Usuario: `admin`
  - Contraseña: `admin123`

## 🛠️ Tecnologías Utilizadas

### Frontend
- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- ESLint

### Backend
- Node.js
- NestJS
- TypeScript
- TypeORM
- Passport JWT
- Class Validator

### Base de Datos
- PostgreSQL
- Redis

### Infraestructura
- Docker & Docker Compose
- RabbitMQ
- Grafana

## 📁 Estructura del Proyecto

```
music-rights-platform/
├── backend/
│   ├── api-gateway/          # Gateway principal
│   ├── auth-service/         # Servicio de autenticación
│   ├── user-service/         # Gestión de usuarios
│   ├── song-service/         # Gestión de canciones
│   ├── rights-service/       # Gestión de derechos
│   ├── chat-service/         # Chat en tiempo real
│   └── notification-service/ # Sistema de notificaciones
├── frontend/                 # Aplicación Next.js
├── infrastructure/           # Configuración de infraestructura
│   └── grafana/             # Dashboards de monitoreo
├── scripts/                 # Scripts de configuración
│   └── setup-windows.bat   # Setup automático para Windows
└── docker-compose.yml      # Configuración de Docker
```

## 🔧 Desarrollo

### Variables de Entorno

Cada servicio utiliza variables de entorno para su configuración. Los valores por defecto están configurados en el `docker-compose.yml`.

### Agregar Nuevos Servicios

1. Crea el directorio del servicio en `backend/`
2. Agrega la configuración del servicio en `docker-compose.yml`
3. Configura las variables de entorno necesarias

## 📊 Monitoreo

Grafana está configurado para monitorear la salud y rendimiento de todos los servicios:

- Métricas de contenedores Docker
- Logs centralizados
- Alertas personalizables

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Alexander V** - [@alexanderv10](https://github.com/alexanderv10)

---

⭐ Si este proyecto te fue útil, ¡no olvides darle una estrella!
