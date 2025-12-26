#!/bin/bash

# Build notes.html from backend files
# Usage: ./build-notes.sh (Mac/Linux)

BACKEND_DIR="_backend_notes"
BACKEND_FILES=(
    "reflections.html"
    "books.html"
    "movies_tier_list.html"
    "anime_tier_list.html"
)

NOTES_LIST_HTML=""
NOTES_FULL_HTML=""

# Function to extract content between markers
extract_between() {
    local file=$1
    local start_pattern=$2
    local end_pattern=$3
    
    awk "/$start_pattern/,/$end_pattern/" "$file"
}

# Collect content from all backend files
for file in "${BACKEND_FILES[@]}"; do
    FILE_PATH="$BACKEND_DIR/$file"
    if [ -f "$FILE_PATH" ]; then
        # Extract list items (li tags)
        ITEMS=$(awk '/<li>/,/<\/li>/' "$FILE_PATH")
        if [ ! -z "$ITEMS" ]; then
            NOTES_LIST_HTML+="$ITEMS"$'\n'
        fi
        
        # Extract full note divs (note-full divs)
        FULLS=$(awk '/id="note[0-9]+-full"/,/^<\/div>$/' "$FILE_PATH")
        if [ ! -z "$FULLS" ]; then
            NOTES_FULL_HTML+="$FULLS"$'\n'
        fi
    fi
done

# Read the template
TEMPLATE_PATH="notes-template.html"
if [ ! -f "$TEMPLATE_PATH" ]; then
    echo "Error: notes-template.html not found!"
    exit 1
fi

TEMPLATE=$(cat "$TEMPLATE_PATH")

# Replace placeholders using sed
# Create temporary file for sed to work with
TEMP_FILE=$(mktemp)

# Save HTML to temporary files (sed has issues with large multiline strings)
echo "$NOTES_LIST_HTML" > /tmp/notes_list.html
echo "$NOTES_FULL_HTML" > /tmp/notes_full.html

# Use sed to replace placeholders
sed -e '/<!-- NOTES_LIST_PLACEHOLDER -->/r /tmp/notes_list.html' \
    -e '/<!-- NOTES_LIST_PLACEHOLDER -->/d' "$TEMPLATE_PATH" | \
sed -e '/<!-- NOTES_FULL_PLACEHOLDER -->/r /tmp/notes_full.html' \
    -e '/<!-- NOTES_FULL_PLACEHOLDER -->/d' > notes.html

# Cleanup
rm -f /tmp/notes_list.html /tmp/notes_full.html

echo "✓ notes.html built successfully!"

