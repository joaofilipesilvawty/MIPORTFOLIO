import { projects } from '../data/projects.js';

function openModal(index) {
  const modal = document.getElementById('modal');
  const project = projects[index];
  if (!modal || !project) return;

  document.getElementById('modal-img').src = project.img;
  document.getElementById('modal-img').alt = project.title;
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-category').textContent = project.category;
  document.getElementById('modal-tech').textContent = project.tech;
  document.getElementById('modal-date').textContent = project.date;
  document.getElementById('modal-body').innerHTML = project.body;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modal-close');
  if (!modal) return;

  document.querySelectorAll('.project').forEach((btn) => {
    btn.addEventListener('click', () => openModal(Number(btn.dataset.project)));
  });

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

document.addEventListener('DOMContentLoaded', initModal);