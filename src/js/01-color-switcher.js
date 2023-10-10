const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);

let colorChanger;

function startBtnHandler() {
  colorChanger = setInterval(
    () => (document.body.style.backgroundColor = `${getRandomHexColor()}`),
    1000
  );
  startBtn.setAttribute('disabled', '');
}

function stopBtnHandler() {
  clearInterval(colorChanger);
  startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
