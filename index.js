const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Доступы к кнопкам 
const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector("body");


let isActive = false;
let intervalId = null;

// Добавление слушателей события
startRef.addEventListener("click", startBodyColor);
stopRef.addEventListener("click", stopBodyColor);

// Функция смены цвета 
function startBodyColor() {
  if (isActive) {
    return;
  }

  changeBodyColor(colors);

  intervalId = setInterval(changeBodyColor, 1000, colors);

  isActive = true;

  addDisabled(startRef);
}

// Функция clear
function stopBodyColor() {
  clearInterval(intervalId);

  isActive = false;

  removeDisabled(startRef);
}

// Функция смены цвета body
function changeBodyColor(colorsArr) {
  bodyRef.style.backgroundColor =
    colorsArr[randomIntegerFromInterval(0, colorsArr.length - 1)];
}

// Функции для добавления и удаления disabled 
function addDisabled(element) {
  element.setAttribute("disabled", "");
}

function removeDisabled(element) {
  element.removeAttribute("disabled");
}


