function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button');
    const status = document.getElementById('form-status');

    btn.disabled = true;
    btn.textContent = 'A enviar\u2026';

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Enviar';
      status.hidden = false;
      status.textContent = 'Mensagem enviada.';
      setTimeout(() => { status.hidden = true; }, 4000);
    }, 800);
  });
}

document.addEventListener('DOMContentLoaded', initContactForm);
