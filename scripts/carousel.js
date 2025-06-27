/* Carousel
############################################################################ */

const initCarousel = () => {
  const target = document.querySelector("[data-js-about-carousel-wrap]");
  if (!target) return;

  let activeCarouselItem = 0;
  let carouselPosition = 0;
  const carouselItems = target.querySelectorAll("& > *");
  const buttons = document.querySelectorAll("[data-js-about-carousel]");

  buttons.forEach(
    button => {
      button.addEventListener('click', function (){
        const itemWidth = carouselItems[activeCarouselItem].clientWidth;
        const direction = button.dataset.jsAboutCarousel;
        
        if (direction === 'previous' && activeCarouselItem > 0){
            activeCarouselItem--;
            carouselPosition += itemWidth;
        }else if (activeCarouselItem < carouselItems.length - 1) {
            activeCarouselItem++;
            carouselPosition += itemWidth * -1;
        }
        target.style.transform = `translateX(${carouselPosition}px)`;
      });
    });
};

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
});