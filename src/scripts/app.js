// Utils
import documentReady from './utils/DOMLoaded.js';
import throttle from './utils/throttle.js';

// DOM elements
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu');
const menuItemsEl = document.querySelectorAll('[data-menu-item]');
const formEl = document.querySelector('[data-form]');
const circleTextEl = document.querySelector('[data-circle]');
const tabtBtnsEl = document.querySelectorAll('[data-tabBtn]');
const homeSliderEl = document.querySelector('[data-slider="home"]');
const blogLayoutEl = document.querySelector('.blog__layout')

export const elements = {
  burgerEl,
  menuEl,
  menuItemsEl,
  formEl,
  circleTextEl,
  tabtBtnsEl,
  homeSliderEl,
  blogLayoutEl,
};

// DOM manipulation
import menu from './DOM/menu.js';
import burger from './DOM/burger.js';
import form from './DOM/form.js';
import marquee from './DOM/marquee.js';
import sliders from './DOM/sliders.js';
import circleText from './DOM/circleText.js';
import tabSlider from './DOM/tabSlider.js';


documentReady(() => {

  // Тут исполняем скрипты
  const { initHomeSlider, handleLayout } = sliders();
  // blogLayoutEl.insertAdjacentHTML('beforeend', handleLayout())

  menu();
  burger();
  form();
  marquee();
  circleText();
  tabSlider();

  // Слайдеры
  initHomeSlider();
  handleLayout()


  // Тротлим инициализацию слайдера, если окно ресайзится, чтобы отключать слайдер на мобилках
  window.addEventListener('resize', throttle(handleLayout, 500));

  // For test needs
});
