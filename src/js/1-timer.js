import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysSpan = document.querySelector("[data-days]");
const hoursSpan = document.querySelector("[data-hours]");
const minutesSpan = document.querySelector("[data-minutes]");
const secondsSpan = document.querySelector("[data-seconds]");

let userSelectedDate = null; // Глобальна змінна для вибраної дати
let countdownInterval = null;

// Ініціалізуємо flatpickr
flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      alert("Please choose a date in the future");
      disableButton(startButton); // Заблокувати кнопку
    } else {
      enableButton(startButton); // Розблокувати кнопку
    }
  },
});

// Функції для керування кнопкою
function disableButton(button) {
  button.disabled = true;
  button.style.backgroundColor = "#a0a0a0";
  button.style.cursor = "not-allowed";
}

function enableButton(button) {
  button.disabled = false;
  button.style.backgroundColor = "#61dafb";
  button.style.cursor = "pointer";
}

// Блокуємо кнопку "Start" на початку
disableButton(startButton);

// Додавання стилів до елементів таймера
function applyStyles() {
  const timer = document.querySelector(".timer");
  const fields = document.querySelectorAll(".field");
  const values = document.querySelectorAll(".value");
  const labels = document.querySelectorAll(".label");

  // Стилізація таймера
  timer.style.display = "flex";
  timer.style.gap = "20px";
  timer.style.justifyContent = "center";
  timer.style.alignItems = "center";
  timer.style.marginTop = "20px";
  timer.style.fontFamily = "Arial, sans-serif";

  // Стилізація полів
  fields.forEach((field) => {
    field.style.display = "flex";
    field.style.flexDirection = "column";
    field.style.alignItems = "center";
    field.style.backgroundColor = "#282c34";
    field.style.padding = "10px 20px";
    field.style.borderRadius = "8px";
    field.style.color = "#ffffff";
    field.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
  });

  // Стилізація значень
  values.forEach((value) => {
    value.style.fontSize = "2.5rem";
    value.style.fontWeight = "bold";
    value.style.color = "#61dafb";
  });

  // Стилізація міток
  labels.forEach((label) => {
    label.style.fontSize = "1rem";
    label.style.fontWeight = "normal";
    label.style.color = "#9b9b9b";
  });

  // Стилізація кнопки
  startButton.style.backgroundColor = "#61dafb";
  startButton.style.border = "none";
  startButton.style.padding = "10px 15px";
  startButton.style.borderRadius = "5px";
  startButton.style.color = "#ffffff";
  startButton.style.cursor = "pointer";
  startButton.style.fontSize = "1rem";
  startButton.style.fontWeight = "bold";
}

// Виклик функції стилізації
applyStyles();

// Обробник натискання на кнопку "Start"
startButton.addEventListener("click", () => {
  if (!userSelectedDate) return;

  if (countdownInterval) clearInterval(countdownInterval); // Зупинити попередній інтервал

  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDifference = userSelectedDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      alert("Час вийшов!");
      updateTimerDisplay(0, 0, 0, 0);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    updateTimerDisplay(days, hours, minutes, seconds);
  }, 1000);
});

// Конвертуємо мілісекунди у дні, години, хвилини, секунди
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

// Оновлюємо значення таймера
function updateTimerDisplay(days, hours, minutes, seconds) {
  daysSpan.textContent = days.toString().padStart(2, "0");
  hoursSpan.textContent = hours.toString().padStart(2, "0");
  minutesSpan.textContent = minutes.toString().padStart(2, "0");
  secondsSpan.textContent = seconds.toString().padStart(2, "0");
}