// To provide navigation, you should specify link's data-target="target-section-selector"
// Example: <a data-targer=".home"> => <section class="home">

export default function (click) {
  try {
    click.preventDefault();
    const targetEl = document.querySelector(click.target.dataset.target);
    // target.top + scrollY - headerHeight
    const scrollDistance =
      targetEl.getBoundingClientRect().top +
      window.scrollY -
      document.querySelector('.header').offsetHeight;

    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  }
}
