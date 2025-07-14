/* –– Mobile Nav Toggle –– */
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => navLinks.classList.toggle('open'));

/* Close nav on link‑click (mobile) */
navLinks.addEventListener('click', e => {
  if (e.target.tagName === 'A') navLinks.classList.remove('open');
});

/* –– Smooth Scroll –– */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
  });
});

/* –– Auto‑year in footer –– */
document.getElementById('year').textContent = new Date().getFullYear();
