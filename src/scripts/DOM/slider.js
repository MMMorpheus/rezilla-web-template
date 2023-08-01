import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default () => {
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Autoplay],
    speed: 3000,
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    pagination: {
      el: '.slider__pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    on: {
      autoplay: () => {
        swiper.params.speed = 3000;
      },
      autoplayPause: () => {
        swiper.params.speed = 500;
      },
    },
    loop: true,
  });
};
