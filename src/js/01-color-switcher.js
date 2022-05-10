const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body')
};

let timeoutId = null;

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.stopBtn.disabled = true;

function onStart() {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    timeoutId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000); 
};

function onStop() {
    clearInterval(timeoutId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
};

