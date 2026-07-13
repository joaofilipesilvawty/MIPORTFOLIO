function initNavigation() {
  const menuBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.classList.remove('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', initNavigation);