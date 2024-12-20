const currentyear = document.querySelector('#currentyear');
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const icon = document.querySelector('.icon');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  mainnav.classList.toggle('mobile-menu');
  hambutton.classList.toggle('show');
  icon.classList.toggle('show');
});

const year = new Date().getFullYear();

currentyear.innerHTML = year;
