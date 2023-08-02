// Utils
import documentReady from './utils/DOMLoaded.js';

// DOM elements
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu');
const menuItemsEl = document.querySelectorAll('[data-menu-item]');
const formEl = document.querySelector('[data-form]');
const circleTextEl = document.querySelector('[data-circle]')

export const elements = {
  burgerEl,
  menuEl,
  menuItemsEl,
  formEl,
  circleTextEl
};

// DOM manipulation
import menu from './DOM/menu.js';
import burger from './DOM/burger.js';
import form from './DOM/form.js';
import marquee from './DOM/marquee.js';
import slider from './DOM/slider.js';
import circleText from './DOM/circleText.js';

documentReady(() => {
  // Тут исполняем скрипты
  menu();
  burger();
  form();
  slider();
  marquee();
  circleText();

});
