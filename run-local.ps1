Set-Location $PSScriptRoot
try {
  Start-Process "http://localhost:8000/"
  py -m http.server 8000 --bind 127.0.0.1
} catch {
  python -m http.server 8000 --bind 127.0.0.1
}
