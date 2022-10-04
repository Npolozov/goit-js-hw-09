import {Notify} from "notiflix";

const formRef = document.querySelector('.form');
console.log(formRef);


formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 

  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);
  if (delay <= 0 || step <= 0 || amount <= 0) {
    return Notify.failure("Please fill in all the fields!");
  }
  
for (let position = 1; position <= amount; position += 1) {
  createPromise(position, delay)
  .then(({ position, delay }) => { 
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => { 
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }); delay += step
}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay)
});
};









