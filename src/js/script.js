
// swiper

var banner = new Swiper(".banner", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    reverseDirection: true,
    disableOnInteraction: false, // توقف نشود!
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    navigation: {
    nextEl: '.swiper-button-next', // دکمه بعدی
    prevEl: '.swiper-button-prev', // دکمه قبلی
  },
});
var banner2 = new Swiper(".banner2", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 3000,
    reverseDirection: true,
    disableOnInteraction: false, // توقف نشود!
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
