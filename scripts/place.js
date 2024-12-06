const currentyear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const windChill = document.querySelector('#windChill');

const year = new Date().getFullYear();
const modifiedDate = new Date(document.lastModified);

const temperture = 32;
const windSpeed = 9;

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: ${modifiedDate.toLocaleDateString()} ${modifiedDate.toLocaleTimeString()}`;

if ((temperture <= 10) & (windSpeed > 4.8)) {
  windChill.innerHTML = `${calculateWindChill(temperture, windSpeed).toFixed(
    1
  )} °C`;
} else {
  windChill.innerHTML = 'N/A';
}

function calculateWindChill(temperture, windSpeed) {
  return 13.12 + 0.6215 * temperture - 11.37 * Math.pow(windSpeed, 0.16);
}
