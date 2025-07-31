@echo off
echo 🏗️ Creando estructura del backend...

REM Auth Service
echo 🔐 Auth Service...
cd backend\auth-service
mkdir src\auth 2>nul
mkdir src\users 2>nul
mkdir src\dto 2>nul
mkdir src\entities 2>nul
mkdir src\guards 2>nul
mkdir src\strategies 2>nul
cd ..\..

REM User Service
echo 👤 User Service...
cd backend\user-service
mkdir src\users 2>nul
mkdir src\dto 2>nul
mkdir src\entities 2>nul
mkdir src\guards 2>nul
mkdir src\decorators 2>nul
cd ..\..

REM Song Service
echo 🎵 Song Service...
cd backend\song-service
mkdir src\songs 2>nul
mkdir src\dto 2>nul
mkdir src\entities 2>nul
mkdir src\guards 2>nul
mkdir src\decorators 2>nul
cd ..\..

REM Rights Service
echo ⚖️ Rights Service...
cd backend\rights-service
mkdir src\rights 2>nul
mkdir src\dto 2>nul
mkdir src\entities 2>nul
mkdir src\guards 2>nul
mkdir src\decorators 2>nul
cd ..\..

REM Chat Service
echo 💬 Chat Service...
cd backend\chat-service
mkdir src\chat 2>nul
mkdir src\dto 2>nul
mkdir src\entities 2>nul
mkdir src\guards 2>nul
mkdir src\gateways 2>nul
cd ..\..

REM Notification Service
echo 🔔 Notification Service...
cd backend\notification-service
mkdir src\notifications 2>nul
mkdir src\dto 2>nul
mkdir src\entities 2>nul
mkdir src\guards 2>nul
cd ..\..

REM API Gateway
echo 🚪 API Gateway...
cd backend\api-gateway
mkdir src\middleware 2>nul
mkdir src\config 2>nul
cd ..\..

echo ✅ Estructura creada exitosamente!
pause