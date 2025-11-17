// AOS init
AOS.init({
  duration: 700,
  once: true,
  easing: 'ease-out-cubic'
});

// small GSAP entrance touches
gsap.from(".brand-text", {duration: 0.8, x: -16, opacity: 0, delay: 0.1});
gsap.from(".nav-list li", {duration: 0.9, y: -6, opacity: 0, stagger: 0.08, delay: 0.15});
gsap.from(".hero-title", {duration: 1.0, y: 12, opacity: 0, delay: 0.2});
gsap.from(".spline-wrap", {duration: 1.1, opacity: 0, y: 18, delay: 0.25});

// Year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
document.getElementById('year2') && (document.getElementById('year2').textContent = new Date().getFullYear());

// Theme toggle (shared across pages)
function initTheme(toggleId) {
  const themeToggle = document.getElementById(toggleId);
  const body = document.body;
  // restore
  const saved = localStorage.getItem('gfg-theme');
  if (saved === 'dark') {
    body.classList.add('dark-mode'); body.classList.remove('light-mode');
    themeToggle && (themeToggle.textContent = '☀️');
  } else if (saved === 'light') {
    body.classList.add('light-mode'); body.classList.remove('dark-mode');
    themeToggle && (themeToggle.textContent = '🌙');
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) { body.classList.add('dark-mode'); themeToggle && (themeToggle.textContent = '☀️'); }
    else { body.classList.add('light-mode'); themeToggle && (themeToggle.textContent = '🌙'); }
  }

  themeToggle && themeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('gfg-theme', isDark ? 'dark' : 'light');
  });
}

// initialize toggles for both pages (ids used in page files)
initTheme('themeToggle');
initTheme('themeToggleTeam');

// simple mobile nav toggle (works on small screens)
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav-list');
if (navToggle) navToggle.addEventListener('click', () => {
  if (navList.style.display === 'flex') { navList.style.display = ''; }
  else { navList.style.display = 'flex'; navList.style.flexDirection = 'column'; navList.style.gap = '12px'; navList.style.background = 'transparent'; navList.style.padding = '10px 0'; }
});

// Also for team page nav toggle
const navToggleTeam = document.getElementById('navToggleTeam');
if (navToggleTeam) navToggleTeam.addEventListener('click', () => {
  if (navList.style.display === 'flex') { navList.style.display = ''; }
  else { navList.style.display = 'flex'; navList.style.flexDirection = 'column'; navList.style.gap = '12px'; navList.style.background = 'transparent'; navList.style.padding = '10px 0'; }
});

// Optional: subtle parallax on hero shapes (small performance-friendly)
const f1 = document.querySelector('.f1'), f2 = document.querySelector('.f2'), f3 = document.querySelector('.f3');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  f1 && (f1.style.transform = `translate(${x}px, ${y}px)`);
  f2 && (f2.style.transform = `translate(${x * -1}px, ${y * -0.8}px)`);
  f3 && (f3.style.transform = `translate(${x * 0.6}px, ${y * -0.6}px)`);
});
/* Mousemove 3D tilt for laptop */
const laptop3d = document.getElementById("laptop3d");
if (laptop3d) {
  const laptop = laptop3d.querySelector(".laptop");
  laptop3d.addEventListener("mousemove", (e) => {
    const rect = laptop3d.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    laptop.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  laptop3d.addEventListener("mouseleave", () => {
    laptop.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
}
// Initialize AOS animations
AOS.init({
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
});
// Slight scroll delay for smoother 2D animations
window.addEventListener("scroll", () => {
  document.body.style.setProperty("--scrollY", window.scrollY + "px");
});
