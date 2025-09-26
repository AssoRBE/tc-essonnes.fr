param([string]$Root="public/photos")
$ErrorActionPreference = "Stop"

function Save-Json([string]$Path, [object]$Obj) {
  $json = $Obj | ConvertTo-Json -Depth 10
  $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($Path, $json, $utf8NoBom)
}

$files = Get-ChildItem -LiteralPath $Root -Recurse -Filter "photos.json" -File
foreach ($f in $files) {
  try {
    $raw = Get-Content -Raw -LiteralPath $f.FullName | ConvertFrom-Json
  } catch { Write-Warning ("JSON invalide: {0}" -f $f.FullName); continue }

  # cas 1: { photos: { ... } } -> wrap en tableau
  if ($null -ne $raw -and ($raw.PSObject.Properties.Name -contains "photos")) {
    $p = $raw.photos
    if ($null -ne $p -and -not ($p -is [System.Collections.IEnumerable])) {
      $raw.photos = @($p)
      Save-Json -Path $f.FullName -Obj $raw
      Write-Host ("Fix: {0}" -f $f.FullName)
    }
    continue
  }

  # cas 2: fichier est un objet photo seul -> le transformer en {photos:[...]}
  if ($null -ne $raw -and -not ($raw -is [System.Collections.IEnumerable])) {
    $out = [pscustomobject]@{ photos = @($raw) }
    Save-Json -Path $f.FullName -Obj $out
    Write-Host ("Fix: {0}" -f $f.FullName)
  }
}
Write-Host "Termine."

