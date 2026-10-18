# Renders the itch cover (itch/cover_*.png) and the app icons (icons/*.png) with headless Edge.
#   powershell -ExecutionPolicy Bypass -File itch/render-cover.ps1
$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$dir = $PSScriptRoot
$icons = Join-Path (Split-Path $dir) 'icons'
New-Item -ItemType Directory -Force $icons | Out-Null

function Render($page, $w, $h, $scale, $out) {
  $url = 'file:///' + ((Join-Path $dir $page) -replace '\\', '/')
  & $edge --headless=new --disable-gpu --hide-scrollbars --window-size="$w,$h" `
    --force-device-scale-factor=$scale --virtual-time-budget=4000 `
    --screenshot="$out" $url 2>$null | Out-Null
  Write-Host "Made $out"
}

Render 'cover.html' 630 500 1 (Join-Path $dir 'cover_630x500.png')
Render 'cover.html' 630 500 2 (Join-Path $dir 'cover_1260x1000.png')
# Icon page is 512x512; scale it to each size the phones ask for.
Render 'icon.html' 512 512 1 (Join-Path $icons 'icon-512.png')
Render 'icon.html' 512 512 0.375 (Join-Path $icons 'icon-192.png')
Render 'icon.html' 512 512 0.3515625 (Join-Path $icons 'apple-touch-icon.png')
