// Theme Toggling Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check local storage or system preference
const savedTheme = localStorage.getItem('theme');
//const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const defaultTheme = 'light';
// Set initial theme
const initialTheme = savedTheme || defaultTheme;
setTheme(initialTheme);

function setTheme(theme) {
  htmlElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.textContent = theme === 'dark' ? 'light mode' : 'dark mode';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Page switching
function showPage(pageName) {
  // For notes and projects, redirect to separate files
  if (pageName === 'notes') {
    window.location.href = 'notes.html';
    return;
  }
  if (pageName === 'projects') {
    window.location.href = 'projects.html';
    return;
  }

  // For main page, show/hide using classes
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageName + '-page').classList.add('active');
  
  // Update nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Scroll to top
  window.scrollTo(0, 0);
}

// Show individual note
function showNote(noteId) {
  document.getElementById('notes-list').style.display = 'none';
  document.querySelectorAll('.note-full').forEach(note => {
    note.style.display = 'none';
  });
  document.getElementById(noteId + '-full').style.display = 'block';
  window.scrollTo(0, 0);
}

// Show notes list
function showNotesList() {
  document.getElementById('notes-list').style.display = 'block';
  document.querySelectorAll('.note-full').forEach(note => {
    note.style.display = 'none';
  });
  window.scrollTo(0, 0);
}

// Abstract toggle
function toggleAbstract(element) {
  const abstract = element.parentElement.nextElementSibling;
  abstract.classList.toggle('show');
  element.textContent = abstract.classList.contains('show') ? '[hide]' : '[abstract]';
}

// Detect current page
function getCurrentPage() {
  const pathname = window.location.pathname;
  if (pathname.includes('notes.html')) return 'notes';
  if (pathname.includes('projects.html')) return 'projects';
  return 'main';
}

// Navigation handling
document.querySelectorAll('.page-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    const currentPage = getCurrentPage();
    
    // If navigating to a different page, redirect
    if (page === 'notes') {
      window.location.href = 'notes.html';
    } else if (page === 'projects') {
      window.location.href = 'projects.html';
    } else if (page === 'main') {
      // If on notes or projects page, go back to index.html
      if (currentPage !== 'main') {
        window.location.href = 'index.html';
      } else {
        // Already on main page, just show it
        showPage(page);
        this.classList.add('active');
        document.querySelectorAll('.sub-nav').forEach(subnav => {
          subnav.classList.remove('show');
        });
      }
    }
  });
});

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const currentPage = getCurrentPage();
    const section = this.getAttribute('data-section');
    
    // If not on main page, redirect to index.html with hash
    if (currentPage !== 'main') {
      window.location.href = 'index.html#' + section;
      return;
    }
    
    // Already on main page, scroll to section
    const mainPage = document.getElementById('main-page');
    if (mainPage && !mainPage.classList.contains('active')) {
      showPage('main');
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

// Track active section and show/hide sub-navigation (only on main page)
function initializeNavTracking() {
  const mainPage = document.getElementById('main-page');
  if (!mainPage) return;

  const sections = document.querySelectorAll('#main-page section');
  const navLinks = document.querySelectorAll('.scroll-link');
  
  function updateNav() {
    // Only update if on main page
    if (!mainPage.classList.contains('active')) {
      return;
    }
    
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    // Hide all sub-navs
    document.querySelectorAll('.sub-nav').forEach(subnav => {
      subnav.classList.remove('show');
    });

    // Remove active from page links
    document.querySelectorAll('.page-link').forEach(link => {
      link.classList.remove('active');
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const section = link.getAttribute('data-section');
      if (section === current) {
        link.classList.add('active');
        // Show sub-nav if exists
        const parentSection = ['research', 'publications'].find(s => current.startsWith(s) || current === s);
        if (parentSection) {
          const subnav = document.getElementById(parentSection + '-subnav');
          if (subnav) {
            subnav.classList.add('show');
            // Also activate parent link
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

// Initialize on page load
initializeNavTracking();

