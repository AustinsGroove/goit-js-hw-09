const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let colorChanger;

stopBtn.setAttribute('disabled', '');

startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);

function startBtnHandler() {
  colorChanger = setInterval(
    () => (document.body.style.backgroundColor = `${getRandomHexColor()}`),
    1000
  );
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
}

function stopBtnHandler() {
  clearInterval(colorChanger);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
