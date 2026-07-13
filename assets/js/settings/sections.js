function revealElement(el, delayMs = 0) {
  if (el.classList.contains('visible')) return;

  const apply = () => {
    el.classList.add('visible');
    el.addEventListener('transitionend', () => {
      el.style.transform = '';
    }, { once: true });
  };

  if (delayMs > 0) setTimeout(apply, delayMs);
  else apply();
}

function revealGroup(entry) {
  const target = entry.target;
  const group = target.closest('.about-list, .projects, .stack');

  if (!group) {
    revealElement(target);
    return;
  }

  const pending = [...group.querySelectorAll('.reveal:not(.visible)')];
  pending.forEach((el, i) => revealElement(el, i * 50));
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealGroup(entry);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollReveal);