const currentyear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const year = new Date().getFullYear();
const modifiedDate = new Date(document.lastModified);

currentyear.innerHTML = year;
lastModified.innerHTML = `Last Modification: ${modifiedDate.toLocaleDateString()} ${modifiedDate.toLocaleTimeString()}`;
