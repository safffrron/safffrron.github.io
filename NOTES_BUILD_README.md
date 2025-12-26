# Adding Notes - Build Process

## How to Add a New Note

1. **Edit the appropriate backend file** in `_backend_notes/`:
   - `reflections.html` - Personal experiences/reflections
   - `books.html` - Book reviews
   - `movies_tier_list.html` - Movie tier lists
   - `anime_tier_list.html` - Anime tier lists

2. **Add your note** with both parts:
   ```html
   <li>
     <div class="note-title" onclick="showNote('note5')">Your Title</div>
     <div class="note-date">Date · Year</div>
     <div class="note-excerpt">Short preview...</div>
   </li>
   
   <div id="note5-full" class="note-full" style="display: none">
     <a class="back-link" onclick="showNotesList()">← Back to all notes</a>
     <div class="note-title">Your Title</div>
     <div class="note-date">Date · Year</div>
     <div class="note-content">
       <p>Full content here...</p>
     </div>
   </div>
   ```

3. **Build notes.html** - Run this before pushing to GitHub:
   ```powershell
   .\build-notes.ps1
   ```

4. **Commit and push**:
   ```
   git add .
   git commit -m "Add new note"
   git push
   ```

## Important Notes

- Always use unique note IDs (note5, note6, etc.)
- The backend files (`_backend_notes/`) are just for organization - they're not visible on the website
- `notes.html` is generated automatically by the build script
- **Do NOT manually edit `notes.html`** - it will be overwritten when you run the build script
- Always run `build-notes.ps1` before pushing changes to ensure the website is up to date
