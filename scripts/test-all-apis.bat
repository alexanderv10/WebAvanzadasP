@echo off
echo 🧪 Probando todas las APIs del Music Rights Platform...
echo.

echo 📊 Testing Health Checks...
curl -X GET http://localhost:3000/health
echo.

echo 🔐 Testing Auth Service...
echo Registrando usuario de prueba...
curl -X POST http://localhost:3000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@demo.com\",\"password\":\"123456\",\"firstName\":\"Test\",\"lastName\":\"User\",\"username\":\"testuser\"}"
echo.

echo Haciendo login...
curl -X POST http://localhost:3000/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@demo.com\",\"password\":\"123456\"}"
echo.

echo 👤 Testing User Service...
echo "Nota: Necesitas el token JWT del login anterior para las siguientes pruebas"
echo.

echo 🎵 Testing Song Service...
curl -X GET http://localhost:3000/api/songs
echo.

echo ⚖️ Testing Rights Service...
curl -X GET http://localhost:3000/api/rights/types
echo.

echo 💬 Testing Chat Service...
echo "WebSocket testing requiere herramientas especiales"
echo.

echo 🔔 Testing Notification Service...
curl -X GET http://localhost:3000/api/notifications/types
echo.

echo ✅ Pruebas completadas!
echo.
echo 📋 Para pruebas completas:
echo    1. Obtén un token JWT del login
echo    2. Úsalo en las cabeceras: Authorization: Bearer TOKEN
echo    3. Prueba los endpoints protegidos
echo.
pause