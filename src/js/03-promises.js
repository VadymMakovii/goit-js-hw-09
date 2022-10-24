import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const formCreatePromise = document.querySelector('.form');
const delayInputEl = formCreatePromise.querySelector('input[name=delay]');
const stepInputEl = formCreatePromise.querySelector('input[name=step]');
const amountInputEl = formCreatePromise.querySelector('input[name=amount]');
const submitBTnEl = formCreatePromise.querySelector('button');

submitBTnEl.addEventListener('click', onClickBtnSubmit);

function onClickBtnSubmit(e) {
  e.preventDefault();
  const stepDelay = Number(stepInputEl.value);
  const userAmount = Number(amountInputEl.value);
  const quantityCall = (userAmount + 1);
  const userDelay = Number(delayInputEl.value);
  let currentDelay = userDelay;
  if (stepDelay < 0 || userDelay < 0) {
   return Notify.warning('Please enter a positive value', {position: 'center-center', timeout: 2000, width: '300px', fontSize: '16px', cssAnimationStyle: 'zoom', pauseOnHover: false, showOnlyTheLastOne: true});
  } else if (userAmount <= 0) {
    return Notify.warning('Amount value must be greater than zero', {position: 'center-center', timeout: 2000, width: '300px', fontSize: '16px', cssAnimationStyle: 'zoom', pauseOnHover: false, showOnlyTheLastOne: true});
  } for (let i = 1; i < quantityCall; i += 1) {
    createPromise(i, currentDelay);
    currentDelay += stepDelay;
  };
};


function createPromise(position, delay) {
    setTimeout(() => {
    const promise = new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(`Fulfilled promise ${position} in ${delay}ms`);
  } 
    reject(`Rejected promise ${position} in ${delay}ms`);
  });
  promise.then(result => {
Notify.success(`✅ ${result}`, {useIcon: false});
  })
    .catch(error => {
      Notify.failure(`❌ ${error}`, { useIcon: false });
});
    }, delay);
};