@echo off
echo 🔧 Instalando dependencias para todos los microservicios...

echo 📦 Instalando dependencias del Auth Service...
cd backend\auth-service
call npm install
cd ..\..

echo 📦 Instalando dependencias del User Service...
cd backend\user-service  
call npm install
cd ..\..

echo 📦 Instalando dependencias del Song Service...
cd backend\song-service
call npm install
cd ..\..

echo 📦 Instalando dependencias del Rights Service...
cd backend\rights-service
call npm install
cd ..\..

echo 📦 Instalando dependencias del Chat Service...
cd backend\chat-service
call npm install
cd ..\..

echo 📦 Instalando dependencias del Notification Service...
cd backend\notification-service
call npm install
cd ..\..

echo 📦 Instalando dependencias del API Gateway...
cd backend\api-gateway
call npm install
cd ..\..

echo 📦 Instalando dependencias del Frontend...
cd frontend
call npm install
cd ..

echo ✅ ¡Todas las dependencias instaladas correctamente!
pause
