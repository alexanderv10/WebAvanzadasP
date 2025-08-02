@echo off
echo 📋 Creando datos de ejemplo...
echo.

echo Creando usuario artista de ejemplo...
curl -X POST http://localhost:3000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"artista@demo.com\",\"password\":\"123456\",\"firstName\":\"Juan\",\"lastName\":\"Artista\",\"username\":\"juan_artist\"}"
echo.

echo Creando usuario comprador de ejemplo...
curl -X POST http://localhost:3000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"comprador@demo.com\",\"password\":\"123456\",\"firstName\":\"María\",\"lastName\":\"Compradora\",\"username\":\"maria_buyer\"}"
echo.

echo 🎵 Para crear canciones y derechos:
echo    1. Haz login como artista
echo    2. Habilita modo artista  
echo    3. Crea algunas canciones
echo    4. Crea derechos para las canciones
echo.
pause