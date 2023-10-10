import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const remainingDays = document.querySelector('span[data-days]');
const ramainingHours = document.querySelector('span[data-hours]');
const remainingMinutes = document.querySelector('span[data-minutes]');
const remainingSeconds = document.querySelector('span[data-seconds]');
let selectedUnixDate;
let timer;

datetimePicker.addEventListener('focus', timeInputHandler);
startBtn.addEventListener('click', startBtnHandler);
startBtn.setAttribute('disabled', '');

function timeInputHandler() {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const date = new Date();
      const unixDate = date.getTime();
      selectedUnixDate = selectedDates[0].getTime();
      if (selectedUnixDate <= unixDate) {
        notifyChooseFutureDate();
        return;
      }
      startBtn.removeAttribute('disabled');
    },
  };
  flatpickr(datetimePicker, options);
}

function startBtnHandler() {
  const date = new Date();
  const unixDate = date.getTime();
  if (selectedUnixDate <= unixDate) {
    notifyChooseFutureDate();
    return;
  }
  timer = setInterval(timerFn, 1000);
  startBtn.setAttribute('disabled', '');
}

function timerFn() {
  const date = new Date();
  const unixDate = date.getTime();
  const remainingMiliseconds = selectedUnixDate - unixDate;
  const remainingTimeObj = convertMs(remainingMiliseconds);
  remainingDays.textContent = addLeadingZero(remainingTimeObj.days);
  ramainingHours.textContent = addLeadingZero(remainingTimeObj.hours);
  remainingMinutes.textContent = addLeadingZero(remainingTimeObj.minutes);
  remainingSeconds.textContent = addLeadingZero(remainingTimeObj.seconds);

  if (
    remainingTimeObj.days === 0 &&
    remainingTimeObj.hours === 0 &&
    remainingTimeObj.minutes === 0 &&
    remainingTimeObj.seconds === 0
  ) {
    clearInterval(timer);
    startBtn.removeAttribute('disabled');
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function notifyChooseFutureDate() {
  Notiflix.Notify.warning('Please choose a date in the future');
}

// Styles
const timeboard = document.querySelector('.timer');
timeboard.style.display = 'flex';
timeboard.style.gap = '5px';
const fields = document.querySelectorAll('.field');
fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.textAlign = 'center';
  field.style.width = '50px';
});
const numbersFields = document.querySelectorAll('.value');
numbersFields.forEach(numbersField => {
  numbersField.style.fontSize = '32px';
});
const labelFields = document.querySelectorAll('.label');
labelFields.forEach(labelField => {
  labelField.style.fontSize = '12px';
  labelField.style.textTransform = 'uppercase';
});
Notiflix.Notify.init({
  width: '580px',
  position: 'center-top',
});
