// Utils
import documentReady from './utils/DOMLoaded.js';
import throttle from './utils/throttle.js';
import navigationScroll from './utils/navigationScroll.js';
import menuObserver from './DOM/menuObserver.js';

// DOM elements
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu');
const menuItemsEl = document.querySelectorAll('[data-menu-item]');
const formEl = document.querySelector('[data-form]');
const circleTextEl = document.querySelector('[data-circle]');
const filtersEl = document.querySelectorAll('[data-filter]');
const listingsEl = document.querySelectorAll('[data-listing]')
const homeSliderEl = document.querySelector('[data-slider="home"]');
const testimonialsSliderEl = document.querySelector('[data-slider="testimonials"]');
const blogSection = document.querySelector('.blog');
const blogArticlesWrapper = document.querySelector('.articles__wrapper');
const blogArticlesBtnEl = document.querySelector('.blog__showMoreBtn');
const footerLinksEl = document.querySelector('.footer__links ul')

export const elements = {
  burgerEl,
  menuEl,
  menuItemsEl,
  formEl,
  circleTextEl,
  filtersEl,
  listingsEl,
  homeSliderEl,
  blogSection,
  blogArticlesWrapper,
  blogArticlesBtnEl,
};

// DOM manipulation
import burger from './DOM/burger.js';
import form from './DOM/form.js';
import marquee from './DOM/marquee.js';
import sliders from './DOM/sliders.js';
import listings from './DOM/listings.js';

documentReady(() => {
  // Тут исполняем скрипты
  const { initHomeSlider, initTestimonialsSlider, handleLayout, displayArticles } = sliders();

  burger();
  form();
  marquee();
  listings();
  displayArticles();

  // Слайдеры
  initHomeSlider(homeSliderEl);
  initTestimonialsSlider(testimonialsSliderEl);
  handleLayout();

  // Тротлим инициализацию слайдера, если окно ресайзится, чтобы отключать слайдер на мобилках
  window.addEventListener('resize', throttle(handleLayout, 500));

  // Other
  footerLinksEl.addEventListener('click', (e) => {
    navigationScroll(e)
  })

  menuObserver()
});
