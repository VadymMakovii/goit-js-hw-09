import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]')
const timer = document.querySelector('.timer');
const timerDays = timer.querySelector('[data-days]');
const timerHours = timer.querySelector('[data-hours]');
const timerMinutes = timer.querySelector('[data-minutes]');
const timerSeconds = timer.querySelector('[data-seconds]');
let userTime = null;

startBtn.setAttribute("disabled", "disabled");
startBtn.addEventListener('click', onStartBtnClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (Date.now() >= selectedDates[0]) {
            // Notify.init(position.center);
            return Notify.failure("Please choose a date in the future", { position: "center-top", showOnlyTheLastOne: true});
    }
        startBtn.removeAttribute("disabled");
        userTime = selectedDates[0];
    },
};

flatpickr("#datetime-picker", options);

function onStartBtnClick() {
    startBtn.setAttribute("disabled", "disabled");
    dateInput.setAttribute("disabled", "disabled");
    const intervalId = setInterval(() => {
        const timerTime = userTime - Date.now();
        const timeComponents = convertMs(timerTime);
        onUpdateTimer(timeComponents);
        if (timerTime <= 0) {
            onUpdateTimer(convertMs(0));
            clearInterval(intervalId);
            dateInput.removeAttribute("disabled");
        };
     }, 1000);
 };
    

function onUpdateTimer(date) {
    timerDays.innerText = date.days;
    timerHours.innerText = date.hours;
    timerMinutes.innerText = date.minutes;
    timerSeconds.innerText = date.seconds;
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};