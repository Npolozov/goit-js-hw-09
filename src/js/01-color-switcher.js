const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector("body");
let timerId = null;

console.log(startBtn);
console.log(stopBtn);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  startBtn.addEventListener('click', () =>
  {    
    startBtn.disabled = true;
    stopBtn.disabled = false; 
    timerId = setInterval(() => {
      let color = getRandomHexColor();
      body.style.backgroundColor = color;
      }, 1000);
  })

  stopBtn.addEventListener("click", () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
    console.log(`Interval with id ${timerId} has stopped!`);
  });
