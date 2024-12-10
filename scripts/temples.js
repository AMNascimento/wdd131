const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('.title');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  mainnav.classList.toggle('mobile-menu');
  hambutton.classList.toggle('show');
  title.classList.toggle('show');
});
