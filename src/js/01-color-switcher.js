const stopBtnEl = document.querySelector('[data-stop]');
const startBtnEl = document.querySelector('[data-start]');
const bodyEl = document.querySelector('body');
let timerId = null;

stopBtnEl.addEventListener('click', onStopBtnClick);
startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
    timerId = setInterval(() => bodyEl.style.backgroundColor = getRandomHexColor(), 1000);
    startBtnEl.setAttribute("disabled", "disabled");
};

function onStopBtnClick() {
    clearInterval(timerId);
    startBtnEl.removeAttribute("disabled");
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};