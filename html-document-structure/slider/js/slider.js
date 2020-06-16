const slides = document.querySelector('.slides');
let currentSlide = slides.firstElementChild;
currentSlide.classList.add('slide-current');
const prevBtn = document.querySelector('a[data-action="prev"]');
const nextBtn = document.querySelector('a[data-action="next"]');
const firstBtn = document.querySelector('a[data-action="first"]');
const lastBtn = document.querySelector('a[data-action="last"]');

prevBtn.addEventListener('click', (event) => updateSlide('prev'));
nextBtn.addEventListener('click', (event) => updateSlide('next'));
firstBtn.addEventListener('click', (event) => updateSlide('first'));
lastBtn.addEventListener('click', (event) => updateSlide('last'));

updateBtn();

function activeSlide(type) {
    switch (type) {
        case 'prev':
            return currentSlide.previousElementSibling;
        case 'next':
            return currentSlide.nextElementSibling;
        case 'first':
            return slides.firstElementChild;
        case 'last':
            return slides.lastElementChild;
        default:
            return
    }
}

function updateBtn() {
    prevBtn.classList.toggle('disabled', currentSlide.previousElementSibling === null);
    nextBtn.classList.toggle('disabled', currentSlide.nextElementSibling === null);
    firstBtn.classList.toggle('disabled', currentSlide.previousElementSibling === null);
    lastBtn.classList.toggle('disabled', currentSlide.nextElementSibling === null);
}

function updateSlide(type) {
    event.preventDefault();
    if (currentSlide.classList.contains('disabled')) { return }
    let newActiveSlide = activeSlide(type);
    if (!newActiveSlide) { return }
    currentSlide.classList.remove('slide-current');
    newActiveSlide.classList.add('slide-current');
    currentSlide = newActiveSlide;
    updateBtn();
}