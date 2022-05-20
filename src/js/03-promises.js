 import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  btnEl: document.querySelector('button[type="submit"]'),
};

let formData = {};

refs.formEl.addEventListener('submit', onPromises);
refs.formEl.addEventListener('input', onInput);
function onInput(e) {
  formData[e.target.name] = e.target.value;
}

function onPromises(e) {
  e.preventDefault();
  
  for (let i = 0; i < Number(formData.amount); i += 1){
    /* переменная */
    setTimeout(() => {
      createPromise(i+1, Number(formData.delay) + i * Number(formData.step)).then(message=> Notiflix.Notify.success(message)).catch(error=> Notiflix.Notify.failure(error));
     }, Number(formData.delay)+i*Number(formData.step))
  };
 };

function createPromise(position, delay) {
 
  return new Promise((resolve, reject) => {
     const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  }
   
  })
  
};