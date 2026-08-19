import { badges } from '../data/badges.js';

function renderBadges() {
  const grid = document.getElementById('badges-grid');
  if (!grid) return;

  grid.innerHTML = badges.map((badge) => `
    <a href="${badge.link}" target="_blank" rel="noopener noreferrer" class="badge" aria-label="${badge.alt}">
      <img src="assets/images/badges/${badge.image}" alt="${badge.alt}" loading="lazy">
    </a>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderBadges);