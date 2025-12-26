# Build notes.html from backend files
# Usage: .\build-notes.ps1

$backendDir = "_backend_notes"
$backendFiles = @(
    "reflections.html",
    "books.html",
    "movies_tier_list.html",
    "anime_tier_list.html"
)

$notesListHTML = ""
$notesFullHTML = ""

# Collect content from all backend files
foreach ($file in $backendFiles) {
    $filePath = Join-Path $backendDir $file
    if (Test-Path $filePath) {
        $content = Get-Content $filePath -Raw
        
        # Extract list items (li tags)
        $listItems = [regex]::Matches($content, '<li>[\s\S]*?</li>')
        foreach ($match in $listItems) {
            $notesListHTML += $match.Value + "`n"
        }
        
        # Extract full note divs - match from opening <div id="note#-full" to closing </div></div>
        # Need to count nested divs properly
        $lines = $content -split "`n"
        $inNoteDiv = $false
        $noteDiv = ""
        $divCount = 0
        
        foreach ($line in $lines) {
            if ($line -match '<div id="note\d+-full"') {
                $inNoteDiv = $true
                $noteDiv = $line
                $divCount = 1
            } elseif ($inNoteDiv) {
                $noteDiv += "`n" + $line
                
                # Count opening divs
                $divCount += ($line | Select-String -Pattern '<div' -AllMatches).Matches.Count
                # Count closing divs
                $divCount -= ($line | Select-String -Pattern '</div>' -AllMatches).Matches.Count
                
                # When all divs are closed, we have the complete note
                if ($divCount -eq 0) {
                    $notesFullHTML += $noteDiv + "`n"
                    $inNoteDiv = $false
                }
            }
        }
    }
}

# Read the template
$templatePath = "notes-template.html"
if (-not (Test-Path $templatePath)) {
    Write-Host "Error: notes-template.html not found!" -ForegroundColor Red
    exit 1
}

$template = Get-Content $templatePath -Raw

# Replace placeholders
$template = $template -replace '<!-- NOTES_LIST_PLACEHOLDER -->', $notesListHTML
$template = $template -replace '<!-- NOTES_FULL_PLACEHOLDER -->', $notesFullHTML

# Write to notes.html
Set-Content -Path "notes.html" -Value $template

Write-Host "notes.html built successfully!" -ForegroundColor Green
