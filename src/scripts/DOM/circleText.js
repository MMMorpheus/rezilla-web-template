import { elements } from '../app.js';

export default () => {
  const { circleTextEl } = elements;
  const angle = 7.21;

  const textElements = circleTextEl.innerText
    .split('')
    .map((char, i) => `<span style="transform: rotate(${i * angle}deg)">${char}</span>`)
    .join('');

  circleTextEl.innerHTML = textElements;
};
