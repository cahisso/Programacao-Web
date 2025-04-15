const carrossel = document.getElementById('carrossel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

nextBtn.onclick = () => carrossel.scrollBy({ left: 300, behavior: 'smooth' });
prevBtn.onclick = () => carrossel.scrollBy({ left: -300, behavior: 'smooth' });