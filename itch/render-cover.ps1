# Renders itch/cover.html to cover_630x500.png and cover_1260x1000.png with headless Edge.
#   powershell -ExecutionPolicy Bypass -File itch/render-cover.ps1
$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
$dir = $PSScriptRoot
$url = 'file:///' + ((Join-Path $dir 'cover.html') -replace '\\', '/')

foreach ($scale in 1, 2) {
  $out = Join-Path $dir $(if ($scale -eq 1) { 'cover_630x500.png' } else { 'cover_1260x1000.png' })
  & $edge --headless=new --disable-gpu --hide-scrollbars --window-size=630,500 `
    --force-device-scale-factor=$scale --virtual-time-budget=4000 `
    --screenshot="$out" $url 2>$null | Out-Null
  Write-Host "Made $out"
}
