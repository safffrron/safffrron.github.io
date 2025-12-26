#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read all backend note files
const backendDir = '_backend_notes';
const backendFiles = [
  'reflections.html',
  'books.html',
  'movies_tier_list.html',
  'anime_tier_list.html'
];

let notesListHTML = '';
let notesFullHTML = '';

// Collect content from all backend files
backendFiles.forEach(file => {
  const filePath = path.join(backendDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract list items (li tags)
    const listItemRegex = /<li>[\s\S]*?<\/li>/g;
    const listItems = content.match(listItemRegex) || [];
    notesListHTML += listItems.join('\n') + '\n';
    
    // Extract full note divs (note-full divs)
    const fullNoteRegex = /<div id="note\d+-full"[\s\S]*?<\/div>\n<\/div>/g;
    const fullNotes = content.match(fullNoteRegex) || [];
    notesFullHTML += fullNotes.join('\n') + '\n';
  }
});

// Read the template
const templatePath = 'notes-template.html';
if (!fs.existsSync(templatePath)) {
  console.error('Error: notes-template.html not found!');
  process.exit(1);
}

let template = fs.readFileSync(templatePath, 'utf-8');

// Replace placeholders
template = template.replace('<!-- NOTES_LIST_PLACEHOLDER -->', notesListHTML);
template = template.replace('<!-- NOTES_FULL_PLACEHOLDER -->', notesFullHTML);

// Write to notes.html
fs.writeFileSync('notes.html', template, 'utf-8');
console.log('✓ notes.html built successfully!');
