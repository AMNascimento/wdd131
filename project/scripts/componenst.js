const components = [
  {
    componentName: 'Colored male-male jumper wires',
    category: 'Cables & Wires',
    sku: 'TPX00160',
    price: 2.5,
    image: 'images/component1.webp',
  },
  {
    componentName: 'Breadboard',
    category: 'Boards',
    sku: 'BB001',
    price: 5.99,
    image: 'images/component2.webp',
  },
  {
    componentName: 'Arduino Uno',
    category: 'Boards',
    sku: 'ARDUINO001',
    price: 29.99,
    image: 'images/component3.webp',
  },
  {
    componentName: 'Raspberry Pi Pico',
    category: 'Boards',
    sku: 'RPI001',
    price: 4.99,
    image: 'images/component4.webp',
  },
  {
    componentName: 'Relay Module',
    category: 'Modules',
    sku: 'RM001',
    price: 3.99,
    image: 'images/component5.webp',
  },
  {
    componentName: 'Motor Driver Module',
    category: 'Modules',
    sku: 'MDM001',
    price: 7.99,
    image: 'images/component6.webp',
  },
  {
    componentName: 'LCD 16x2',
    category: 'Modules',
    sku: 'LCD001',
    price: 8.99,
    image: 'images/component7.webp',
  },
  {
    componentName: 'Temperature Sensor (DS18B20)',
    category: 'Sensors',
    sku: 'TS001',
    price: 2.99,
    image: 'images/component8.webp',
  },
  {
    componentName: 'Humidity Sensor (DHT11)',
    category: 'Sensors',
    sku: 'HS001',
    price: 1.99,
    image: 'images/component9.webp',
  },
  {
    componentName: 'Ultrasonic Sensor (HC-SR04)',
    category: 'Sensors',
    sku: 'US001',
    price: 3.49,
    image: 'images/component10.webp',
  },
  {
    componentName: 'PIR Motion Sensor',
    category: 'Sensors',
    sku: 'PMS001',
    price: 2.99,
    image: 'images/component11.webp',
  },
  {
    componentName: 'Light Sensor (LDR)',
    category: 'Sensors',
    sku: 'LS001',
    price: 1.5,
    image: 'images/component12.webp',
  },
  {
    componentName: 'Soil Moisture Sensor',
    category: 'Sensors',
    sku: 'SMS001',
    price: 2.29,
    image: 'images/component13.webp',
  },
  {
    componentName: 'RGB LED',
    category: 'Modules',
    sku: 'RGB001',
    price: 1.99,
    image: 'images/component14.webp',
  },
  {
    componentName: 'Buzzer',
    category: 'Modules',
    sku: 'BUZ001',
    price: 0.99,
    image: 'images/component15.webp',
  },
];

createCard(components);

// homeMenu.addEventListener('click', () => {
//   createCard(components);
// });

// oldMenu.addEventListener('click', () => {
//   createCard(
//     temples.filter((temple) => parseInt(temple.dedicated.split(',')[0]) < 1900)
//   );
// });

// newMenu.addEventListener('click', () => {
//   createCard(
//     temples.filter((temple) => parseInt(temple.dedicated.split(',')[0]) > 2000)
//   );
// });

// largeMenu.addEventListener('click', () => {
//   createCard(temples.filter((temple) => temple.area > 90000));
// });

// smallMenu.addEventListener('click', () => {
//   createCard(temples.filter((temple) => temple.area < 10000));
// });

function createCard(components) {
  document.querySelector('.components-container').innerHTML = '';
  components.forEach((component) => {
    const card = document.createElement('section');
    const name = document.createElement('h3');
    const category = document.createElement('p');
    const sku = document.createElement('p');
    const Price = document.createElement('p');
    const image = document.createElement('img');

    name.textContent = component.componentName;
    category.innerHTML = `<span class="label">Category:</span> ${component.category}`;
    sku.innerHTML = `<span class="label">SKU:</span> ${component.sku}`;
    Price.innerHTML = `<span class="label">Price:</span> $${component.price}`;
    image.setAttribute('src', component.image);
    image.setAttribute('alt', `${component.componentName}`);
    image.setAttribute('class', 'component-img');
    image.setAttribute('loading', 'lazy');

    card.setAttribute('class', 'component-card');
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(category);
    card.appendChild(sku);
    card.appendChild(Price);

    document.querySelector('.components-container').appendChild(card);
  });
}
