// Utils
import documentReady from './utils/DOMLoaded.js';


// DOM elements
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu');
const menuItemsEl = document.querySelectorAll('[data-menu-item]');

export const elements = {
  burgerEl,
  menuEl,
  menuItemsEl,
};

// DOM manipulation
import menu from './DOM/menu.js';
import burger from './DOM/burger.js';

documentReady(() => {
  // Тут исполняем скрипты
  menu();
  burger();

});
