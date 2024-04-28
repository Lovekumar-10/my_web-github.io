const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');

navToggle.addEventListener('click', () => {
    navLinks.classList.add('show');
});

navClose.addEventListener('click', () => {
    navLinks.classList.remove('show');
});





const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Show the first slide initially
slides[currentSlide].classList.add('active');

// Start the slide interval after images have loaded
window.addEventListener('load', () => {
    let slideInterval = setInterval(nextSlide, 5000);
});