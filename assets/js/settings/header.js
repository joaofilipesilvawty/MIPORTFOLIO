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
    if (scrollPos >= section.offsetTop) current = section.id;
  });

  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

function initHeader() {
  let ticking = false;
  let lenis = getLenis();

  function onScroll(scrollY) {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      updateActiveNav(scrollY);
      ticking = false;
    });
  }

  if (lenis) {
    lenis.on('scroll', ({ scroll }) => onScroll(scroll));
  } else {
    window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
  }

  updateActiveNav();

  window.addEventListener('lenis:ready', () => {
    const l = getLenis();
    if (!l) return;
    l.on('scroll', ({ scroll }) => onScroll(scroll));
    updateActiveNav(l.scroll);
  });
}

document.addEventListener('DOMContentLoaded', initHeader);