import scroll from '../utils/scroll.js';
import aria from '../utils/aria.js';
import navigationScroll from '../utils/navigationScroll.js';
import { elements } from '../app.js';

export default () => {
  const { burgerEl, menuEl } = elements;

  const isMobile = window.matchMedia('(max-width: 991.98px)');
  let isMenuOpened = false;

  // Handling menu's state by changing classNames
  burgerEl?.addEventListener('click', () => {
    if (isMobile.matches) {
      isMenuOpened ? (isMenuOpened = false) : (isMenuOpened = true);

      burgerEl.classList.toggle('burger-active');
      menuEl.style.top = `${document.querySelector('.header').getBoundingClientRect().bottom}px`;
      menuEl.classList.toggle('menu-active');

      // If is opened, handling scroll and aria attr's
      if (isMenuOpened) {
        aria.open(burgerEl, 'menu');
        scroll.disable();
      } else {
        aria.close(burgerEl, 'menu');
        scroll.enableWithOffset();
      }
    }
  });

  // Handling scroll behaviour and aria attr's by click on menu elements
  menuEl.addEventListener('click', (e) => {
    if (isMobile.matches) {
      burgerEl.classList.toggle('burger-active');
      menuEl.classList.toggle('menu-active');
    }
    if (isMenuOpened) {
      aria.close(burgerEl, 'menu');
      scroll.enableWithOffset();
      isMenuOpened = false;
    }
    if (e.target.tagName === 'A') {
      navigationScroll(e);
    }
  });
};
