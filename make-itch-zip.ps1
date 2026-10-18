# Builds the files to publish:
#   dist/vamos-andrew.zip  for itch.io (index.html at the top of the zip)
#   dist/app/              the same files as a folder, for drag-and-drop hosting of the phone app
# Run from anywhere:  powershell -ExecutionPolicy Bypass -File make-itch-zip.ps1
# Zip entries are written by hand with forward slashes; Compress-Archive on Windows PowerShell
# writes "lessons\x.js", which itch's Linux servers unpack as one oddly named file.
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem

$root = $PSScriptRoot
$dist = Join-Path $root 'dist'
$zipPath = Join-Path $dist 'vamos-andrew.zip'
$folder = Join-Path $dist 'app'

$files = @()
$files += Get-ChildItem $root -File | Where-Object { $_.Extension -in '.html', '.css', '.js', '.webmanifest' } | ForEach-Object { $_.Name }
$files += Get-ChildItem (Join-Path $root 'lessons') -Filter *.js | ForEach-Object { "lessons/$($_.Name)" }
$files += Get-ChildItem (Join-Path $root 'icons') -Filter *.png | ForEach-Object { "icons/$($_.Name)" }

New-Item -ItemType Directory -Force $dist | Out-Null
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
if (Test-Path $folder) { Remove-Item $folder -Recurse -Force }

$zip = [IO.Compression.ZipFile]::Open($zipPath, 'Create')
try {
  foreach ($f in $files) {
    $src = Join-Path $root $f
    [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $src, $f) | Out-Null
    $dest = Join-Path $folder $f
    New-Item -ItemType Directory -Force (Split-Path $dest) | Out-Null
    Copy-Item $src $dest
  }
} finally { $zip.Dispose() }
Write-Host "Made $zipPath and $folder ($($files.Count) files)"
