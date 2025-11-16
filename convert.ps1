Add-Type -AssemblyName System.Drawing
$src = Join-Path $PSScriptRoot 'public/images/192b51933b5c8de658b188f96893568f.png'
$dest = Join-Path $PSScriptRoot 'public/images/hero-4.jpg'
$img = [System.Drawing.Image]::FromFile($src)
$img.Save($dest,[System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()
