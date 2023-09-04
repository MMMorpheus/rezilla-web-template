// To provide navigation, you should specify link's data-target="target-section-selector"
// Example: <a data-targer=".home"> => <section class="home">

export default function (click) {
  try {
    const targetEl = document.querySelector(click.target.dataset.target);
    const headerHeight = document.querySelector('.header').offsetHeight;
    const currentScroll = window.scrollY;

    const scrollDistance = targetEl.getBoundingClientRect().top + currentScroll - headerHeight;

    window.scrollTo({
      top: scrollDistance,
      behavior: 'smooth',
    });

    click.preventDefault();
  } catch (error) {
    console.log(error);
  }
}
