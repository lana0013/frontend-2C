let slideIndex = 0;

function moveSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll('.carousel-images img');
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}
