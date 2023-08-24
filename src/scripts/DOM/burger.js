import scroll from '../utils/scroll.js';
import aria from '../utils/aria.js';
import navigationScroll from '../utils/navigationScroll.js';
import { elements } from '../app.js';

export default () => {
  const { burgerEl, menuEl, menuItemsEl } = elements;

  // Handling menu's state by changing classNames
  burgerEl?.addEventListener('click', () => {
    burgerEl.classList.toggle('burger-active');
    menuEl.classList.toggle('menu-active');

    // If is open, handling scroll and aria attr's
    if (menuEl?.classList.contains('menu-active')) {
      aria.open(burgerEl, 'menu');
      scroll.disable();
    } else {
      aria.close(burgerEl, 'menu');
      scroll.enable();
    }
  });

  // Handling scroll behaviour and aria attr's by click on menu elements
  menuEl.addEventListener('click', (e) => {

    // // Highligting menu list elements
    // menuItemsEl?.forEach((li) => {
    //   li.classList.remove('menu__item-active');
    // });
    // e.target.closest('.menu__item').classList.add('menu__item-active');
    // Toggling burger
    if (e.target.tagName === 'A') {
      burgerEl.classList.remove('burger-active');
      menuEl.classList.remove('menu-active');
      aria.close(burgerEl, 'menu');
      scroll.enable();
      navigationScroll(e)
    }
  });
};
