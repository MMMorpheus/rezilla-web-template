import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { elements } from '../app.js';

export default () => {
  const { blogSection, blogArticlesWrapper, blogArticlesBtnEl } = elements;

  // Defining slider variable
  let blogsSlider;

  function handleLayout() {
    // Gaining articles
    const articles = Array.from(blogArticlesWrapper.querySelectorAll('.articles__link'));

    if (document.documentElement.clientWidth > 768) {
      if (!blogsSlider) {
        const slider = createBlogSliderLayout(articles);
        blogArticlesWrapper.append(slider);
        // Slider initialization
        blogsSlider = initBlogSlider('[data-slider="blog"]');
      }
      return;
    } else {
      if (blogsSlider) {
        blogsSlider.disable();
        blogsSlider.destroy(true, true);
        blogsSlider = null;
        // Replacing slides to articles
        blogArticlesWrapper.innerHTML = '';
        articles.forEach((el) => blogArticlesWrapper.append(el));
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
    // Pagination element
    const pagination = document.createElement('div');
    pagination.className = 'articles__pagination';
    // Slides
    const slides = elemsToSlides.map((el) => {
      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add('swiper-slide');
      swiperSlide.classList.add('swiper-slide-centered');
      swiperSlide.append(el);
      return swiperSlide;
    });
    // Appending slides to swiper-wrapper
    slides.forEach((slide) => {
      swiperWrapper.append(slide);
    });
    // Appending swiper-wrapper to swiper
    swiper.append(swiperWrapper);
    // Appending pagination el to swiper
    swiper.append(pagination);

    return swiper;
  }

  function initHomeSlider(el) {
    const homeSlider = new Swiper(el, {
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
      pagination: {
        el: '.articles__pagination',
        bulletActiveClass: 'articles__active',
        clickable: true,
      },
      speed: 850,
      slidesPerView: 3,
      slidesPerGroup: 1,
      grabCursor: true,
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

  function initTestimonialsSlider(el) {
    const testimonialsSlider = new Swiper(el, {
      modules: [Navigation, Pagination],
      speed: 1000,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.tesNext',
        prevEl: '.tesPrev',
      },
      pagination: {
        el: '.testimonials__pagination',
        clickable: true,
        bulletActiveClass: 'testimonials__bullet-active',
        bulletClass: 'testimonials__bullet',
      },
      breakpoints: {
        992: {
          direction: 'vertical',
          slidesPerView: 1,
        },
        768: {
          direction: 'horizontal',
          slidesPerView: 2,
        },
        // 480: {
        //   // slidesPerView: 1,
        // },
      },
    });
    return testimonialsSlider;
  }

  function displayArticles() {
    const blogs = Array.from(blogArticlesWrapper.children);
    const blogsLenght = blogArticlesWrapper.children.length;
    const defaultElemCount = 3;
    let step = defaultElemCount;

    blogArticlesBtnEl.addEventListener('click', () => {
      step += 3;
      const visible = blogs.slice(0, step);
      visible.forEach((el) => el.classList.add('-visible'));
      if (step >= blogsLenght) {
        blogArticlesBtnEl.style.display = 'none';
      }
    });
  }

  return { initHomeSlider, initTestimonialsSlider, handleLayout, displayArticles };
};
