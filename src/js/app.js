/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import validate from './validate.js';

const inputform = document.querySelector('input');
const btn = document.querySelector('button');
const span = document.querySelectorAll('.collection span');

inputform.addEventListener('click', () => {
  inputform.value = '';
  span.forEach((element) => {
    element.classList.remove('cardvisible');
  });
});
btn.addEventListener('click', (event) => {
  event.preventDefault();
  const result = validate(inputform.value);
  if (result[0]) {
    const payment = result[1];
    span.forEach((element) => {
      console.log(element.title);
      if (element.dataset.title === payment) {
        element.classList.add('cardvisible');
      }
    });
  } else alert('Номер карты неверный');
});
