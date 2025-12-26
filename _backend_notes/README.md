# Backend Notes Organization

This folder contains notes organized by category to avoid long scrolling when editing.

## Structure

- **reflections.html** - Personal experiences and reflections (e.g., conference notes)
- **books.html** - Book reviews and reading notes
- **movies_tier_list.html** - Movie and TV show tier lists
- **anime_tier_list.html** - Anime tier lists

## How to Add a New Note

1. Choose the appropriate category file based on note type
2. Add the list item in the first section (before the `<!-- Full view -->` comment)
3. Add the full content in the corresponding `<div id="note#-full">` section
4. Copy all content from these files into the main `notes.html` file between:
   - `<ul class="note-list">` and `</ul>` for the list items
   - And the corresponding full note divs before the `<footer>`

## Note Format

Each note has two parts:

### 1. List Item (appears in the notes list)
```html
<li>
  <div class="note-title" onclick="showNote('note#')">Title Here</div>
  <div class="note-date">Date · Year</div>
  <div class="note-excerpt">Short preview of the note...</div>
</li>
```

### 2. Full View (appears when clicked)
```html
<div id="note#-full" class="note-full" style="display: none">
  <a class="back-link" onclick="showNotesList()">← Back to all notes</a>
  <div class="note-title">Title Here</div>
  <div class="note-date">Date · Year</div>
  <div class="note-content">
    <!-- Full content here -->
  </div>
</div>
```

## Important Notes

- Use unique IDs (note1, note2, note3, etc.)
- The frontend (notes.html) is what users see - keep it as the single source of truth
- After adding a note in backend files, manually copy the content to notes.html
- These backend files are for organization only - they don't affect the live site
