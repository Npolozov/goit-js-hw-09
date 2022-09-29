function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


const shouldResolve = Math.random() > 0.3;
console.log(shouldResolve);