let swiperCards = new Swiper('.gallery__cards', {
  loopedSlide: 5,
  cssMode: true,
  effect: "fade",
});

let swiperThumbnails = new Swiper('.gallery__thumbnails', {
  loopedSlide: 5,
  direction: "horizontal",
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 15,
  paginationClickable: true,
  slideToClickedSlide: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiperThumbnails.controller.control = swiperCards;