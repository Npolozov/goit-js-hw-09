import {Notify} from "notiflix";

const formRef = document.querySelector('.form');
console.log(formRef);


formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 

  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  const delayInput = Number(delay.value);
  const stepInput = Number(step.value);
  const amountInput = Number(amount.value);
  if (delayInput <= 0 || stepInput <= 0 || amountInput <= 0) {
    return Notify.failure("Please fill in all the fields!");
  }
  
for (let position = 0; position < amountInput; position += 1) {
  createPromise(({position, delayInput}))
  .then(({ position, delay }) => { 
    Notify.success(`✅ Fulfilled promise ${position} in ${delayInput}ms`);
  }, delayInput += stepInput)
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delayInput}ms`);
  }, delayInput += stepInput);
}
function createPromise({position, delay}) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delayInput);
});
}
};










