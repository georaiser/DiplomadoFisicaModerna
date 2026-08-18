# ============================================================
# md_to_docx.ps1
# Convierte archivos Markdown con formulas LaTeX a DOCX
# usando pandoc.
#
# USO RAPIDO (desde esta carpeta):
#   .\md_to_docx.ps1                   (convierte borradores de monografia)
#   .\md_to_docx.ps1 -MakeTemplate     (genera plantilla Arial 12, interlineado simple)
#   .\md_to_docx.ps1 -Input "ruta.md"  (convierte un archivo especifico)
#   .\md_to_docx.ps1 -Open             (abre el docx en Word al terminar)
# ============================================================

param(
    [string]$Input  = "",
    [string]$Output = "",
    [switch]$MakeTemplate,
    [switch]$Open
)

if (-not (Get-Command pandoc -ErrorAction SilentlyContinue)) {
    Write-Error "pandoc no instalado. Descargalo: https://pandoc.org/installing.html"
    exit 1
}
Write-Host "[$(pandoc --version | Select-Object -First 1)]" -ForegroundColor Cyan

$SummariesDir = "D:\00_FisicaModerna\01_Termodinamica_TeoriaAtomicaPrecuantica\Summaries"
$BrainDir     = "C:\Users\jorge\.gemini\antigravity\brain\915f7bf1-9c81-4504-9c97-9b32e55a01c2"
$TemplateDocx = "$BrainDir\plantilla_arial12.docx"

$ConversionMap = @(
    @{ Src = "$BrainDir\borrador_monografia.md";          Dst = "$SummariesDir\Monografia_Borrador_5pag.docx";    Label = "Borrador 5 paginas" },
    @{ Src = "$BrainDir\borrador_monografia_extendido.md"; Dst = "$SummariesDir\Monografia_Borrador_Extendido.docx"; Label = "Borrador extendido" }
)

if ($Input -ne "") {
    if ($Output -eq "") { $Output = [System.IO.Path]::ChangeExtension($Input, ".docx") }
    $ConversionMap = @(@{ Src = $Input; Dst = $Output; Label = "Archivo personalizado" })
}

# --- Generar plantilla Arial 12 con Word COM ---
if ($MakeTemplate) {
    Write-Host "Generando plantilla..." -ForegroundColor Yellow
    try {
        $word = New-Object -ComObject Word.Application; $word.Visible = $false
        $doc = $word.Documents.Add()
        $doc.Styles.Item("Normal").Font.Name = "Arial"
        $doc.Styles.Item("Normal").Font.Size = 12
        $doc.Styles.Item("Normal").ParagraphFormat.SpaceAfter = 0
        $doc.Styles.Item("Normal").ParagraphFormat.SpaceBefore = 0
        $doc.Styles.Item("Normal").ParagraphFormat.LineSpacingRule = 0
        foreach ($h in @("Heading 1","Heading 2","Heading 3")) {
            $doc.Styles.Item($h).Font.Name = "Arial"
            $doc.Styles.Item($h).Font.Size = if ($h -eq "Heading 1") {14} elseif ($h -eq "Heading 2") {13} else {12}
        }
        $doc.SaveAs2([ref]$TemplateDocx, [ref]16)
        $doc.Close(); $word.Quit()
        Write-Host "Plantilla guardada: $TemplateDocx" -ForegroundColor Green
    } catch {
        Write-Warning "Word no disponible. Se usara plantilla por defecto."
    }
}

# --- Conversion ---
$args_base = @(
    "-f", "markdown+tex_math_dollars+tex_math_single_backslash+raw_tex",
    "--mathml",
    "--standalone",
    "--wrap=none"
)
if (Test-Path $TemplateDocx) {
    $args_base += "--reference-doc", $TemplateDocx
    Write-Host "Usando plantilla: $TemplateDocx" -ForegroundColor Cyan
}

foreach ($item in $ConversionMap) {
    if (-not (Test-Path $item.Src)) { Write-Warning "No encontrado: $($item.Src)"; continue }
    Write-Host "`n► $($item.Label)" -ForegroundColor Yellow
    Write-Host "  → $($item.Dst)"
    $result = & pandoc $item.Src -o $item.Dst @args_base 2>&1
    if ($LASTEXITCODE -eq 0) {
        $warns = $result | Where-Object { $_ -match "WARNING" }
        if ($warns) { $warns | ForEach-Object { Write-Warning $_ } }
        else { Write-Host "  ✓ OK sin errores" -ForegroundColor Green }
    } else { Write-Error "  ✗ $result" }
}

if ($Open -and $ConversionMap.Count -eq 1 -and (Test-Path $ConversionMap[0].Dst)) {
    Start-Process $ConversionMap[0].Dst
}

Write-Host "`nListo. Archivos en: $SummariesDir" -ForegroundColor Green
