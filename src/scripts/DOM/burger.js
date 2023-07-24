import scroll from '../utils/scroll.js';
import aria from '../utils/aria.js';
import { elements } from '../app.js';

export default () => {
  const { burgerEl, menuEl } = elements;

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
    if (e.target.tagName === 'A') {
      burgerEl.classList.remove('burger-active');
      menuEl.classList.remove('menu-active');
      aria.close(burgerEl, 'menu');
      scroll.enable();
    }
  });
};
