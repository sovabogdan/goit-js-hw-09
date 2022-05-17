 
const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
  btnEl: document.querySelector('button[type="submit"]'),
};

refs.formEl.addEventListener('click', onPromises);

function onPromises() {
  promisesLoop();
 };
function promisesLoop() {
  for (let position = 1; position <= refs.amountEl.value; position += 1){
    createPromise();
  };
  
 };
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve = console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    reject = console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  })
  
};