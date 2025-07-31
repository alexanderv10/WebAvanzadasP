@echo off
echo 🎵 Configurando Music Rights Platform...

docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker no está instalado
    pause
    exit /b 1
)

echo 📦 Instalando dependencias del frontend...
cd frontend
call npm install
cd ..

echo 🐘 Iniciando servicios...
docker-compose up -d

echo ⏳ Esperando servicios...
timeout /t 30 /nobreak >nul

echo ✅ ¡Configuración completa!
echo Frontend: http://localhost:3000
echo Grafana: http://localhost:3001 (admin/admin123)
pause