const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const contentPages = {
  notes: 'content/notes.html',
  projects: 'content/projects.html'
};
const loadedPages = new Set();

function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? 'light mode' : 'dark mode';
}

async function loadPageContent(pageName) {
  if (!contentPages[pageName] || loadedPages.has(pageName)) return;
  const page = document.getElementById(pageName + '-page');
  if (!page) return;

  try {
    const response = await fetch(contentPages[pageName]);
    if (!response.ok) throw new Error('Could not load ' + contentPages[pageName]);
    page.innerHTML = await response.text();
    loadedPages.add(pageName);
  } catch (error) {
    page.innerHTML = '<header><h1>Content unavailable</h1><p class="subtitle">This section could not be loaded. Try viewing the site through a local server or GitHub Pages.</p></header>';
    console.error(error);
  }
}

async function showPage(pageName) {
  await loadPageContent(pageName);

  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  const nextPage = document.getElementById(pageName + '-page');
  if (nextPage) {
    nextPage.classList.add('active');
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`.page-link[data-page="${pageName}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  window.scrollTo(0, 0);
}

function showNote(noteId) {
  const notesList = document.getElementById('notes-list');
  const selectedNote = document.getElementById(noteId + '-full');
  if (!notesList || !selectedNote) return;

  notesList.style.display = 'none';
  document.querySelectorAll('.note-full').forEach(note => {
    note.style.display = 'none';
  });
  selectedNote.style.display = 'block';
  window.scrollTo(0, 0);
}

function showNotesList() {
  const notesList = document.getElementById('notes-list');
  if (!notesList) return;

  notesList.style.display = 'block';
  document.querySelectorAll('.note-full').forEach(note => {
    note.style.display = 'none';
  });
  window.scrollTo(0, 0);
}

function toggleAbstract(element) {
  const abstract = element.parentElement.nextElementSibling;
  abstract.classList.toggle('show');
  element.textContent = abstract.classList.contains('show') ? '[hide]' : '[abstract]';
}

function getCurrentPage() {
  if (document.getElementById('main-page').classList.contains('active')) return 'main';
  if (document.getElementById('notes-page').classList.contains('active')) return 'notes';
  if (document.getElementById('projects-page').classList.contains('active')) return 'projects';
  return 'main';
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme || 'light');

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
}

function initializePageLinks() {
  document.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', async function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      await showPage(page);
      document.querySelectorAll('.sub-nav').forEach(subnav => {
        subnav.classList.remove('show');
      });
    });
  });
}

function initializeScrollLinks() {
  document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', async function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      const mainPage = document.getElementById('main-page');
      if (!mainPage.classList.contains('active')) {
        await showPage('main');
      }
      const target = document.getElementById(section);
      if (target) {
        setTimeout(() => {
          window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth'
          });
        }, 100);
      }
    });
  });
}

function initializeNavTracking() {
  const mainPage = document.getElementById('main-page');
  if (!mainPage) return;
  const sections = document.querySelectorAll('#main-page section');
  const navLinks = document.querySelectorAll('.scroll-link');

  function updateNav() {
    if (!mainPage.classList.contains('active')) return;

    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.sub-nav').forEach(subnav => {
      subnav.classList.remove('show');
    });
    document.querySelectorAll('.page-link').forEach(link => {
      link.classList.remove('active');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      const section = link.getAttribute('data-section');
      if (section === current) {
        link.classList.add('active');
        const parentSection = ['research'].find(s => current.startsWith(s) || current === s);
        if (parentSection) {
          const subnav = document.getElementById(parentSection + '-subnav');
          if (subnav) {
            subnav.classList.add('show');
            const parentLink = document.querySelector(`.scroll-link[data-section="${parentSection}"]`);
            if (parentLink) {
              parentLink.classList.add('active');
            }
          }
        }
      }
    });
  }

  window.addEventListener('scroll', updateNav);
  window.addEventListener('load', updateNav);
}

function initializeHashScroll() {
  window.addEventListener('load', function() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        setTimeout(() => {
          window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });
}

initializeTheme();
initializePageLinks();
initializeScrollLinks();
initializeNavTracking();
initializeHashScroll();
