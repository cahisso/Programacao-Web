// Alternar tema claro/escuro
function alternarTema() {
  document.body.classList.toggle('escuro');
}

// Controles do carrossel
const carrossel = document.getElementById('carrossel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

next.addEventListener('click', () => {
  carrossel.classList.add('no-animation');
  carrossel.scrollBy({ left: 320, behavior: 'smooth' });
  setTimeout(() => carrossel.classList.remove('no-animation'), 1000);
});

prev.addEventListener('click', () => {
  carrossel.classList.add('no-animation');
  carrossel.scrollBy({ left: -320, behavior: 'smooth' });
  setTimeout(() => carrossel.classList.remove('no-animation'), 1000);
});
