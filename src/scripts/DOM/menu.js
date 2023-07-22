import { elements } from '../app.js';

export default () => {
  const {menuEl, menuItemsEl} = elements;

  menuEl?.addEventListener('click', (e) => {
    menuItemsEl?.forEach((li) => {
      li.classList.remove('menu__item-active');
    });
    e.target.parentElement.classList.add('menu__item-active');
  });
};
