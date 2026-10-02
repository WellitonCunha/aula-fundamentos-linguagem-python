const slides = [...document.querySelectorAll('.slide')];
const counter = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;

function updateButtons() {
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
}

function show(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
  counter.textContent = `${current + 1} / ${slides.length}`;
  updateButtons();
}

prevBtn.addEventListener('click', () => show(current - 1));
nextBtn.addEventListener('click', () => show(current + 1));

show(0);
