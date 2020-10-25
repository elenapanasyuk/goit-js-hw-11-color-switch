
/*
Есть массив цветов в hex-формате и кнопки Start и Stop.

<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
*/

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function setBodyBgColor() {
  return bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length-1)];
};

stopBtn.disabled = true;
let intervalId = null;

function onStartBtnClick(evt) {
 
  intervalId = setInterval(setBodyBgColor, 1000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
  
};

function onStopBtnClick (evt){
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};
