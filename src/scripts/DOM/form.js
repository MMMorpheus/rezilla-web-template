import aria from '../utils/aria.js';
import { elements } from '../app.js';

export default () => {
  const { formEl } = elements;

  const formOptions = formEl.querySelector('[data-option]');
  const formIndicator = formEl.querySelector('[data-option-indicator]');
  const formExtra = formEl.querySelector('[data-extra]');
  const formFields = formEl.querySelector('[data-fields]');

  // Handling options state
  let currentOption;

  formOptions.addEventListener('click', (e) => {
    currentOption = e.target.dataset.option;

    if (e.target.dataset.option === 'rent') {
      // Disable pointer events on target button
      e.target.style.pointerEvents = 'none';
      // Enable pointer events on another button
      formOptions.querySelector('[data-option="sale"]').style.pointerEvents = 'auto';

      formIndicator.classList.add('form__option-indicator--active');
    }

    if (e.target.dataset.option === 'sale') {
      e.target.style.pointerEvents = 'none';
      formOptions.querySelector('[data-option="rent"]').style.pointerEvents = 'auto';

      formIndicator.classList.remove('form__option-indicator--active');
    }
  });

  // Handling extra options area is expanded or not
  formExtra.addEventListener('click', () => {
    formExtra.classList.toggle('form__extra--active');
    formFields.classList.toggle('form__fields--expanded');

    if(formExtra.classList.contains('form__extra--active')) {
      aria.open(formExtra, 'advance search')
    } else {
      aria.close(formExtra, 'advance search')
    }
  });

  return {
    currentOption,
  };
};
