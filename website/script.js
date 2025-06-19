// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active section in navbar
const sections = document.querySelectorAll('main .section');
const navItems = document.querySelectorAll('.navbar a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(dark) {
  if (dark) {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  }
}

// Load theme preference
const userPref = localStorage.getItem('theme');
const systemPrefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(userPref === 'dark' || (!userPref && systemPrefDark));

themeToggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}); 