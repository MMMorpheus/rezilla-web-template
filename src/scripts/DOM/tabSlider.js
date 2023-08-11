import { elements } from "../app.js";

export default () => {
  const {tabtBtnsEl} = elements;
  tabtBtnsEl[0].classList.add('listings__tabBtn--active');

  tabtBtnsEl.forEach((btn) =>
    btn.addEventListener('click', () => {
      tabtBtnsEl.forEach((el) => el.classList.remove('listings__tabBtn--active'))
      btn.classList.add('listings__tabBtn--active')
    })
  )
}
