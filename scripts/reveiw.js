const counter = document.querySelector('#counter');
const numVisits = Number(localStorage.getItem('numVisits-ls')) || 0;
const newNumVisits = numVisits + 1;
localStorage.setItem('numVisits-ls', newNumVisits);

counter.innerHTML = newNumVisits;
