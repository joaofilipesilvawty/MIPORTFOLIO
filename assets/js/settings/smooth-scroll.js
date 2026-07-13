let lenis = null;

function initSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  import('https://esm.sh/lenis@1.1.18').then(({ default: Lenis }) => {
    lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.documentElement.classList.add('lenis');

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target || !lenis) return;

        e.preventDefault();
        lenis.scrollTo(target, { offset: -80, duration: 1.1 });
      });
    });

    window.dispatchEvent(new CustomEvent('lenis:ready'));
  }).catch(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  });
}

export function getLenis() {
  return lenis;
}

document.addEventListener('DOMContentLoaded', initSmoothScroll);
