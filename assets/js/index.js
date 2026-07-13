const projects = [
    {
        title: 'Aurora Analytics',
        img: 'assets/project1.png',
        category: 'SaaS',
        tech: 'React, Node.js',
        date: 'Out 2023',
        body: '<p>Plataforma SaaS de métricas para equipas de produto. Design focado em legibilidade e dados complexos sem sobrecarga visual.</p>'
    },
    {
        title: 'Volt Minimal Store',
        img: 'assets/project2.png',
        category: 'Mobile',
        tech: 'Flutter',
        date: 'Set 2023',
        body: '<p>Conceito de e-commerce sob a premissa "less is more". App mobile com animações subtis e layouts estruturados.</p>'
    },
    {
        title: 'Structura Portal',
        img: 'assets/project3.png',
        category: 'Web 3D',
        tech: 'Three.js, WebGL',
        date: 'Jul 2023',
        body: '<p>Portal digital com modelos 3D interativos e transições controladas pelo scroll, para estúdio de arquitetura.</p>'
    }
];

const modal = document.getElementById('modal');
const menuBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 10) {
        header.style.boxShadow = '0 1px 0 var(--border)';
    } else {
        header.style.boxShadow = 'none';
    }
    lastScroll = current;
}, { passive: true });

menuBtn.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.classList.remove('active');
    });
});

function openModal(i) {
    const p = projects[i];
    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-img').alt = p.title;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-category').textContent = p.category;
    document.getElementById('modal-tech').textContent = p.tech;
    document.getElementById('modal-date').textContent = p.date;
    document.getElementById('modal-body').innerHTML = p.body;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelectorAll('.project').forEach(btn => {
    btn.addEventListener('click', () => openModal(Number(btn.dataset.project)));
});

document.getElementById('modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const status = document.getElementById('form-status');
    btn.disabled = true;
    btn.textContent = 'A enviar\u2026';
    setTimeout(() => {
        e.target.reset();
        btn.disabled = false;
        btn.textContent = 'Enviar';
        status.hidden = false;
        status.textContent = 'Mensagem enviada.';
        setTimeout(() => { status.hidden = true; }, 4000);
    }, 800);
});