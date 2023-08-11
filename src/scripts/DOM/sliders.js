import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { elements } from '../app.js';
import blogs from '../Data/blogs.json';

export default () => {
  const { homeSliderEl, blogLayoutEl } = elements;

  function createBlogSliderLayout(cssClass) {
    return `
    <div class="${cssClass}__wrapper">
      <div class="swiper" data-slider="blog">
        <div class="swiper-wrapper">
        ${blogs
          .map((el, i) => {
            return `<div class="swiper-slide swiper-slide-center">
              <a href="#" class="${cssClass}__link">
                <div class="${cssClass}__img">
                  <img src="${el.imgUrl}" alt="slide image" >
                </div>
                <span class="${cssClass}__title">${el.title}</span>
                <span class="${cssClass}__desc">${el.desc}</span>
                <button class="${cssClass}__followBtn"></button>
              </a>
            </div>`;
          })
          .join('')}
        </div>
      </div>
      <button class="${cssClass}__prev">
          <?xml version="1.0" ?><svg
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
          </svg>
        </button>
        <button class="${cssClass}__next">
          <?xml version="1.0" ?><svg
            viewBox="0 0 96 96"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
          </svg>
        </button>
    </div
    `;
  }

  function createBlogLayout(cssClass) {
    return `
    <div class="${cssClass}__wrapper">
        ${blogs
          .map((el, i) => {
            return `<a href="#" class="${cssClass}__link">
                <div class="${cssClass}__img">
                  <img src="${el.imgUrl}" alt="slide image" >
                </div>
                <span class="${cssClass}__title">${el.title}</span>
                <span class="${cssClass}__desc">${el.desc}</span>
              </a>`;
          })
          .join('')}
    </div
    `;
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
  }

  function initBlogSlider(container) {
    console.log(container);
    return new Swiper(container, {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.bSlider__next',
        prevEl: '.bSlider__prev',
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

  function handleLayout() {
    let blogSlider;
    // Layout strings
    const sliderLayout = createBlogSliderLayout('bSlider');
    const blogLayout = createBlogLayout('bSlider');

    if (window.innerWidth > 768) {
      blogLayoutEl.replaceChildren();
      blogLayoutEl.insertAdjacentHTML('beforeend', sliderLayout)
      blogSlider = initBlogSlider(blogLayoutEl.querySelector('[data-slider="blog"]'));
    } else {
      // Remove the Swiper slider instance
      if(blogSlider) {
        blogSlider.disable();
        blogSlider.destroy(true, true)
        blogSlider = null;
      }
      blogLayoutEl.replaceChildren();
      blogLayoutEl.insertAdjacentHTML('beforeend', blogLayout)
    }
  }

  return { initHomeSlider, handleLayout };
};
