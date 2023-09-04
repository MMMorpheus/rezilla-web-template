export default function () {
  let activeSection = null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (activeSection !== entry.target) {
            document
              .querySelectorAll('.menu__item')
              .forEach((item) => item.classList.remove('menu__item-active'));
          }
          const targetClass = entry.target.className;
          const targetLink = document.querySelector(`[data-target=".${targetClass}"]`);
          targetLink?.closest('.menu__item').classList.add('menu__item-active')

          activeSection = entry.target;
        }

      });
    },
    {
      threshold: 0.65,
    }
  );

  document.querySelectorAll('section[class]').forEach((item) => observer.observe(item));
}
