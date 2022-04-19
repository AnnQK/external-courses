const slider = document.querySelector('.slider');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const images = [
  './assets/img1.jpg',
  './assets/img2.jpg',
  './assets/img3.jpg',
  './assets/img4.jpg',
  './assets/img5.jpg',
  './assets/img6.jpg',
];
const lastSlide = images.length - 1;
let currentSlide = 0;

function addSlides() {
  images.forEach((item) => {
    slider.insertAdjacentHTML(
      'afterbegin',
      `<img src="${item}" class="slide" />`,
    );
  });
}
/* eslint-disable */
function displaySlides(slide) {
  Array.from(document.querySelectorAll('.slide')).forEach((item, index) => {
    item.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
}
/* eslint-enable */

function nextSlide() {
  if (currentSlide === lastSlide) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  displaySlides(currentSlide);
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = lastSlide;
  } else {
    currentSlide -= 1;
  }
  displaySlides(currentSlide);
}

function init() {
  addSlides();
  displaySlides(0);
}

document.addEventListener('DOMContentLoaded', init);
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
