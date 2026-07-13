import { getLenis } from './smooth-scroll.js';

function updateActiveNav(scrollY = window.scrollY) {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  if (!sections.length) return;

  const scrollPos = scrollY + window.innerHeight / 3;
  const navHrefs = new Set(
    [...links].map((link) => link.getAttribute('href')).filter(Boolean)
  );

  const footer = document.querySelector('.footer');
  if (footer && scrollPos >= footer.offsetTop) {
    links.forEach((link) => link.classList.remove('active'));
    return;
  }

  let current = null;

  sections.forEach((section) => {
    const href = `#${section.id}`;
    if (!navHrefs.has(href)) return;
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${current}`);
  });
}

function initHeader() {
  let ticking = false;
  let lenisActive = false;

  function onScroll(scrollY) {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateActiveNav(scrollY);
      ticking = false;
    });
  }

  window.addEventListener('scroll', () => {
    if (lenisActive) return;
    onScroll(window.scrollY);
  }, { passive: true });

  updateActiveNav();

  window.addEventListener('lenis:ready', () => {
    const lenis = getLenis();
    if (!lenis) return;

    lenisActive = true;
    lenis.on('scroll', ({ scroll }) => onScroll(scroll));
    updateActiveNav(lenis.scroll);
  });
}

document.addEventListener('DOMContentLoaded', initHeader);
