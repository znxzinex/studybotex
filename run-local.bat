@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:8000/"
  py -m http.server 8000 --bind 127.0.0.1
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:8000/"
  python -m http.server 8000 --bind 127.0.0.1
  goto :eof
)
echo Python is required for local testing.
echo Install Python from python.org, then run this file again.
pause
