# Builds dist/vamos-andrew.zip for itch.io: index.html at the top of the zip, no git or dev files.
# Run from anywhere:  powershell -ExecutionPolicy Bypass -File make-itch-zip.ps1
# Entries are written by hand with forward slashes; Compress-Archive on Windows PowerShell
# writes "lessons\x.js", which itch's Linux servers unpack as one oddly named file.
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem

$root = $PSScriptRoot
$dist = Join-Path $root 'dist'
$zipPath = Join-Path $dist 'vamos-andrew.zip'
$files = @('index.html', 'style.css', 'app.js', 'conjugation.js') +
  (Get-ChildItem (Join-Path $root 'lessons') -Filter *.js | ForEach-Object { "lessons/$($_.Name)" })

New-Item -ItemType Directory -Force $dist | Out-Null
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
$zip = [IO.Compression.ZipFile]::Open($zipPath, 'Create')
try {
  foreach ($f in $files) {
    [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, (Join-Path $root $f), $f) | Out-Null
  }
} finally { $zip.Dispose() }
Write-Host "Made $zipPath ($($files.Count) files)"
