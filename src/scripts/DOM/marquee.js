/*
  Определить переменные:
    1. Количество елементов в списке
    2. Количество отображаемых елементов на странице

  Сделать:
    1. Склонировать дом эл-ты для плавности анимации
*/

export default () => {
  const root = document.documentElement;

  // Parent marquee selector
  const container = document.querySelector('[data-marquee]');
  // Marquee list selector
  const elements = document.querySelector('[data-marquee-list]');
  // Marquee elements count
  const elementsCount = elements.children.length;
  // Marque elements displayed
  const elementsDisplayed = window
    .getComputedStyle(root)
    .getPropertyValue('--marqueeElementsDisplayed');

  container.appendChild(elements.cloneNode(true));
};
