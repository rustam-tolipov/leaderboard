import './style.css';
import saveToAPI from './sendResult';
import getFromAPI from './getResult';
import VanillaTilt from './vanilla-tilt';

const scores = document.querySelector('.scores-box');
const add = document.querySelector('.add');
const refresh = document.querySelector('.refresh');

add.addEventListener('click', () => {
  const name = document.querySelector('.name').value;
  const scores = document.querySelector('.score').value;
  const x = document.querySelector('.warning');
  if (name === '') {
    x.style.display = 'block';
  } else {
    saveToAPI(name, scores);
    document.querySelector('.name').value = '';
    document.querySelector('.score').value = '';
    if (x.style.display !== 'none') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }
});

refresh.addEventListener('click', () => {
  scores.innerHTML = '';
  getFromAPI();
});

VanillaTilt.init(document.querySelector('body'), {
  max: 1.5,
  speed: 10000,
});

VanillaTilt.init(document.querySelector('.title'), {
  max: 1.5,
  speed: 10000,
});

window.onload = getFromAPI();
