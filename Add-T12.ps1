param(
  [string]$Root = ".",
  [string]$NetworksPath = "content/networks.ts",
  [string]$Img = "",      # chemin d'une icone PNG a copier (optionnel)
  [int]$H = 60,
  [switch]$AutoInsert,    # tente l'insertion auto dans networks.ts (best-effort)
  [switch]$Force
)

$ErrorActionPreference = "Stop"

# Constantes
$Slug   = "t12"
$Folder = "reseau-t12"
$Name   = "Tramway T12"
$ImgRel = "/networks/reseau-t12.png"

function Write-Utf8NoBom([string]$Path,[string]$Text){
  $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
  [System.IO.File]::WriteAllText($Path, $Text, $utf8NoBom)
}

# --- Paths resolus (sans fonction R) ---
$networksFile = Join-Path -Path $Root -ChildPath $NetworksPath
$photosDir    = Join-Path -Path $Root -ChildPath (Join-Path -Path "public" -ChildPath (Join-Path "photos" $Folder))
$photosJson   = Join-Path -Path $photosDir -ChildPath "photos.json"
$iconDir      = Join-Path -Path $Root -ChildPath (Join-Path "public" "networks")
$iconPath     = Join-Path -Path $iconDir -ChildPath "reseau-t12.png"

if (-not (Test-Path -LiteralPath $networksFile)) {
  Write-Error ("Fichier introuvable: {0}" -f $networksFile)
  exit 1
}

# --- 1) Dossier photos + manifest ---
if (-not (Test-Path -LiteralPath $photosDir)) {
  New-Item -ItemType Directory -Path $photosDir | Out-Null
  Write-Host ("Cree: {0}" -f $photosDir)
}
if (-not (Test-Path -LiteralPath $photosJson)) {
  $json = (@{ photos = @() } | ConvertTo-Json -Depth 5)
  Write-Utf8NoBom -Path $photosJson -Text $json
  Write-Host ("Cree: {0}" -f $photosJson)
} else {
  Write-Host ("OK: {0} existe deja" -f $photosJson)
}

# --- 2) Icone ---
if (-not (Test-Path -LiteralPath $iconDir)) {
  New-Item -ItemType Directory -Path $iconDir | Out-Null
}
if ($Img) {
  if (-not (Test-Path -LiteralPath $Img)) {
    Write-Warning ("Icone introuvable: {0}" -f $Img)
  } else {
    if ($Force -or -not (Test-Path -LiteralPath $iconPath)) {
      Copy-Item -LiteralPath $Img -Destination $iconPath -Force
      Write-Host ("Icone copiee -> {0}" -f $iconPath)
    } else {
      Write-Host ("Icone deja presente -> {0} (utilise -Force pour ecraser)" -f $iconPath)
    }
  }
} else {
  if (-not (Test-Path -LiteralPath $iconPath)) {
    Write-Host "Aucune icone fournie. Place un PNG ici :" -ForegroundColor Yellow
    Write-Host ("  {0}" -f $iconPath)
  } else {
    Write-Host ("OK: icone deja presente -> {0}" -f $iconPath)
  }
}

# --- 3) Snippet a coller (au besoin) ---
$snippet = @"
{
  img:  "$ImgRel",
  href: "/gallery/network/$Slug",
  name: "$Name",
  slug: "$Slug",
  folder: "$Folder",
  h: $H
}
"@
Write-Host ""
Write-Host "=== SNIPPET A COLLER DANS $NetworksPath (dans le tableau 'networks') ===" -ForegroundColor Cyan
Write-Host $snippet

# --- 4) Optionnel: insertion auto best-effort ---
if ($AutoInsert) {
  $txt = Get-Content -Raw -LiteralPath $networksFile

  if ($txt -match 'slug\s*:\s*["'']t12["'']') {
    Write-Host "Entree T12 deja presente -> rien a inserer."
  } else {
    $rxEnd = New-Object System.Text.RegularExpressions.Regex('\]\s*;', [System.Text.RegularExpressions.RegexOptions]::RightToLeft)
    if ($rxEnd.IsMatch($txt)) {
      $newTxt = $rxEnd.Replace($txt, (",`r`n$snippet`r`n];"), 1)
      Copy-Item -LiteralPath $networksFile -Destination ($networksFile + ".bak") -Force | Out-Null
      Set-Content -LiteralPath $networksFile -Value $newTxt -Encoding UTF8
      Write-Host ("Insertion auto OK -> {0}" -f $networksFile) -ForegroundColor Green
    } else {
      Write-Warning "Impossible de trouver la fin du tableau (']);'). Colle le snippet manuellement."
    }
  }
}

Write-Host "Termine."
