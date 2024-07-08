let images = Array.from(document.querySelectorAll('.testimonial_image'));
let splide = document.querySelector('.testimonial__content-wrapper splider-component');

splide.splide.on('move', (newIndex, prevIndex) => {
  images.map((image, index) => {
    let isHidden = image.classList.contains('no-display');
    let isVisible = image.classList.contains('displaying');
    if (newIndex === index) {
      if (isHidden) {
        image.classList.remove('no-display');
        image.classList.add('displaying');
      }
    } else {
      if (isVisible) {
        image.classList.add('no-display');
        image.classList.remove('displaying');
      }
    }
  });
});
