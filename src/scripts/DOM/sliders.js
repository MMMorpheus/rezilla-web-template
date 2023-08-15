import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { elements } from '../app.js';
import blogs from '../Data/blogs.json';

export default () => {
  const { homeSliderEl, blogSection, blogArticlesWrapper } = elements;
  // Defining slider variable
  let blogsSlider;

  function handleLayout() {
    // Gaining articles
    const articles = Array.from(blogArticlesWrapper.querySelectorAll('.articles__link'));
    console.log(articles)

    if (document.documentElement.clientWidth > 768) {
      if (!blogsSlider) {
        const slider = createBlogSliderLayout(articles);
        blogArticlesWrapper.append(slider);
        // Slider initialization
        blogsSlider = initBlogSlider('[data-slider="blog"]');
      }
      return ;
    } else {
      if (blogsSlider) {
        console.log('mobile, slider need to destroy');
        blogsSlider.disable();
        blogsSlider.destroy(true, true);
        blogsSlider = null;
        // Replacing slides to articles
        blogArticlesWrapper.innerHTML = '';
        articles.forEach(el => blogArticlesWrapper.append(el));
        // Сompensate for scroll to avoid UI jumping
        window.scrollTo({
          top: blogSection.getBoundingClientRect().top + window.scrollY
        })

      }
      return;
    }
  }

  function createBlogSliderLayout(elemsToSlides) {
    // Swiper
    const swiper = document.createElement('div');
    swiper.className = 'swiper';
    swiper.dataset.slider = 'blog';
    // Swiper-wrapper
    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';
    // Slides
    const slides = elemsToSlides.map((el) => {
      const swiperSlide = document.createElement('div');
      swiperSlide.className = 'swiper-slide';
      swiperSlide.append(el);
      return swiperSlide;
    });
    // Appending slides to swiper-wrapper
    slides.forEach((slide) => {
      swiperWrapper.append(slide);
    });
    // Appending swiper-wrapper to swiper
    swiper.append(swiperWrapper);

    return swiper;
  }

  function initHomeSlider() {
    const homeSlider = new Swiper(homeSliderEl, {
      modules: [Navigation, Pagination, Autoplay],
      speed: 3000,
      navigation: {
        nextEl: '.hSlider__next',
        prevEl: '.hSlider__prev',
      },
      pagination: {
        el: '.hSlider__pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      on: {
        autoplay: () => {
          homeSlider.params.speed = 3000;
        },
        autoplayPause: () => {
          homeSlider.params.speed = 500;
        },
      },
      loop: true,
    });
    return homeSlider;
  }

  function initBlogSlider(container) {
    return new Swiper(container, {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.articles__next',
        prevEl: '.articles__prev',
      },
      speed: 850,
      slidesPerView: 3,
      slidesPerGroup: 1,
      breakpoints: {
        768: {
          centeredSlides: false,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      },
    });
  }

  return { initHomeSlider, handleLayout };
};

// Контент доступный для всех, кто не использует JS => есть изначальная разметка в ввиде статей для блога
// 1. Построение разметки для слайдера:
//     1.1. Получить коллекцию слайдов, сохранить копию для того, чтобы вернуть ее при ресайзе
//     1.2. На основе коллекции построить разметку для слайдера
//     1.3. Проверять на ширину окна и дополнительно на уже вставленную размеку, чтобы замещать ее
// 2. Вставить разметку и проинициализировать слайдер
// 3. Повесить событие ресайз для окна и вызывать функцию
