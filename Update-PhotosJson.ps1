param(
  [string]$Root = "public/photos",
  [switch]$Recurse,
  [switch]$SkipExisting
)

$ErrorActionPreference = "Stop"
$ImageExt = @(".jpg",".jpeg",".png",".webp",".gif")

function Is-Image([System.IO.FileInfo]$f) { $ImageExt -contains $f.Extension.ToLowerInvariant() }
function Save-Json([string]$Path, [object]$Obj) {
  $json = $Obj | ConvertTo-Json -Depth 5
  $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($Path, $json, $utf8NoBom)
}

if (-not (Test-Path -LiteralPath $Root)) { Write-Error ("Chemin introuvable: {0}" -f $Root); exit 1 }

$dirs = if ($Recurse) { Get-ChildItem -LiteralPath $Root -Directory -Recurse } else { Get-ChildItem -LiteralPath $Root -Directory }
if (-not $dirs) { Write-Host ("Aucun dossier trouve sous '{0}'." -f $Root); exit 0 }

foreach ($dir in $dirs) {
  $images = Get-ChildItem -LiteralPath $dir.FullName -File | Where-Object { Is-Image $_ } | Sort-Object Name
  if (-not $images) { continue }

  $jsonPath = Join-Path $dir.FullName "photos.json"
  if ($SkipExisting -and (Test-Path -LiteralPath $jsonPath)) { Write-Host ("Skip: {0} (photos.json existe deja)" -f $dir.FullName); continue }

  # >>> tableau force
  $list = @()
  foreach ($img in $images) {
    $list += [pscustomobject]@{
      src         = $img.Name
      title       = ""
      description = ""
    }
  }

  $out = [pscustomobject]@{ photos = $list }   # <— photos est toujours un ARRAY
  Save-Json -Path $jsonPath -Obj $out
  Write-Host ("OK: {0} -> photos.json ({1} items)" -f $dir.Name, $list.Count)
}

Write-Host "Termine."
