const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('.title');
const homeMenu = document.querySelector('#homeMenu');
const oldMenu = document.querySelector('#oldMenu');
const newMenu = document.querySelector('#newMenu');
const largeMenu = document.querySelector('#largeMenu');
const smallMenu = document.querySelector('#smallMenu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  mainnav.classList.toggle('mobile-menu');
  hambutton.classList.toggle('show');
  title.classList.toggle('show');
});

const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  {
    templeName: 'Brasília Brazil Temple',
    location: 'Brasília, Brazil',
    dedicated: '2023, September, 17',
    area: 25000,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg',
  },
  {
    templeName: 'Boston Massachusetts Temple',
    location: 'Boston, Massachusetts, United States',
    dedicated: '1995, September, 30',
    area: 69600,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-9913-main.jpg',
  },
  {
    templeName: 'São Paulo Brazil Temple',
    location: 'São Paulo, Brazil',
    dedicated: '1978, October, 30',
    area: 59246,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg',
  },
];

createCard(temples);

homeMenu.addEventListener('click', () => {
  createCard(temples);
});

oldMenu.addEventListener('click', () => {
  createCard(
    temples.filter((temple) => parseInt(temple.dedicated.split(',')[0]) < 1900)
  );
});

newMenu.addEventListener('click', () => {
  createCard(
    temples.filter((temple) => parseInt(temple.dedicated.split(',')[0]) > 2000)
  );
});

largeMenu.addEventListener('click', () => {
  createCard(temples.filter((temple) => temple.area > 90000));
});

smallMenu.addEventListener('click', () => {
  createCard(temples.filter((temple) => temple.area < 10000));
});

function createCard(temples) {
  document.querySelector('.container').innerHTML = '';
  temples.forEach((temple) => {
    const card = document.createElement('section');
    const name = document.createElement('h3');
    const location = document.createElement('p');
    const dedicated = document.createElement('p');
    const size = document.createElement('p');
    const image = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    size.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    image.setAttribute('src', temple.imageUrl);
    image.setAttribute('alt', `${temple.templeName} Temple`);
    image.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(size);
    card.appendChild(image);

    document.querySelector('.container').appendChild(card);
  });
}
