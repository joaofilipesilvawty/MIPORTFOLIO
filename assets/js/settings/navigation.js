function closeMenu(menuBtn, navMenu) {
  navMenu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.classList.remove('active');
}

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
      closeMenu(menuBtn, navMenu);

      if (window.matchMedia('(min-width: 769px)').matches) {
        navMenu.style.transform = 'translateY(-50%) translateX(10px)';
        setTimeout(() => {
          navMenu.style.transform = '';
        }, 300);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initNavigation);
