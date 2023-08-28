import { elements } from '../app.js';

export default () => {
  const { filtersEl, listingsEl } = elements;

  // Highliting default filter "All"
  filtersEl[0].classList.add('listings__option--active');
  let activeFilter = filtersEl[0].dataset.filter;
  listingsEl.forEach(el => el.classList.add('item__card--visible'));

  filtersEl.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      // Removing the active class
      filtersEl.forEach((el) => el.classList.remove('listings__option--active'));
      // Adding active class
      btn.classList.add('listings__option--active');
      // Changing active filter
      activeFilter = e.target.dataset.filter;
      // Showing only appropriate items according to the filter value
      listingsEl.forEach((el) => {
        if (activeFilter === 'all') {
          el.classList.add('item__card--visible');
        } else if (el.dataset.listing === activeFilter) {
          el.classList.add('item__card--visible');
        } else {
          el.classList.remove('item__card--visible');
        }
      });
    })
  );

};
