import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

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
      iziToast.error({
        title: "Помилка",
        message: "Будь ласка, оберіть дату в майбутньому",
        position: "topRight",
      });
      disableButton(startButton); // Заблокувати кнопку
    } else {
      enableButton(startButton); // Розблокувати кнопку
    }
  },
});

// Функції для керування станом кнопки
function disableButton(button) {
  if (button) {
    button.disabled = true;
    button.style.backgroundColor = "#a0a0a0";
    button.style.cursor = "not-allowed";
  }
}

function enableButton(button) {
  if (button) {
    button.disabled = false;
    button.style.backgroundColor = "#61dafb";
    button.style.cursor = "pointer";
  }
}

// Блокуємо кнопку "Start" на початку
disableButton(startButton);

// Додавання стилів до елементів таймера
function applyStyles() {
  const timer = document.querySelector(".timer");
  const fields = document.querySelectorAll(".field");
  const values = document.querySelectorAll(".value");
  const labels = document.querySelectorAll(".label");
  if (timer) {
    timer.style.display = "flex";
    timer.style.gap = "48px";
    timer.style.justifyContent = "center";
  }
  fields.forEach((field) => {
    field.style.flexDirection = "column";
    field.style.alignItems = "center";
  });

  values.forEach((value) => {
    value.style.fontSize = "48px";
    value.style.fontWeight = "bold";
    value.style.color = "#61dafb";
  });
  labels.forEach((label) => {
    label.style.fontSize = "24px";
    label.style.color = "#61dafb";
  });

  // Стилізація flatpickr
  const flatpickrWrapper = document.querySelector(".flatpickr-wrapper");
  flatpickrWrapper.style.display = "flex";
  flatpickrWrapper.style.justifyContent = "center";
  flatpickrWrapper.style.alignItems = "center";

  const flatpickrInput = document.querySelector(".flatpickr-input");
  flatpickrInput.style.width = "300px";
  flatpickrInput.style.padding = "10px";
  flatpickrInput.style.backgroundColor = "#282c34";
  flatpickrInput.style.color = "#ffffff";
  flatpickrInput.style.borderRadius = "8px";
  flatpickrInput.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
  flatpickrInput.style.fontSize = "18px";
  flatpickrInput.style.textAlign = "center";


  const flatpickrSelected = document.querySelectorAll(".flatpickr-selected");
  flatpickrSelected.forEach((selected) => {
    selected.style.backgroundColor = "#61dafb";
    selected.style.color = "#282c34";
    selected.style.borderRadius = "8px";
    selected.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
  });

 // Стилізація flatpickr-mobile
  const flatpickrMobile = document.querySelector(".flatpickr-mobile");
  flatpickrMobile.style.width = "500px";
  flatpickrMobile.style.padding = "10px";
  flatpickrMobile.style.backgroundColor = "#282c34";
  flatpickrMobile.style.color = "#ffffff";
  flatpickrMobile.style.borderRadius = "8px";
  flatpickrMobile.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
  flatpickrMobile.style.fontSize = "38px";
  flatpickrMobile.style.textAlign = "center";  
  
  // Стилізація таймера
  timer.style.display = "flex";
  timer.style.gap = "20px";
  timer.style.justifyContent = "center";
  timer.style.alignItems = "center";
  timer.style.marginTop = "20px";
  timer.style.fontFamily = "Arial, sans-serif";
  timer.style.marginTop = "60px";

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
  startButton.style.backgroundColor = "#4E35DE";
  startButton.style.border = "none";
  startButton.style.padding = "10px 15px";
  startButton.style.borderRadius = "8px";
  startButton.style.color = "#ffffff";
  startButton.style.fontSize = "48px";
  startButton.style.fontWeight = "bold";
}

document.addEventListener("DOMContentLoaded", () => {
    applyStyles(); // Викликаємо стилізацію після завантаження DOM
});

// Відключення вибору дати під час таймера
function disableDatePicker() {
    if (datetimePicker) {
        datetimePicker.disabled = true; // Блокуємо календар
        datetimePicker.style.cursor = "not-allowed"; // Візуальна індикація
    }
}
function enableDatePicker() {
    if (datetimePicker) {
        datetimePicker.disabled = false; // Розблоковуємо календар
        datetimePicker.style.cursor = "pointer"; // Повертаємо стандартний стан
    }
}

// Обробник натискання на кнопку "Start"
startButton.addEventListener("click", () => {
  if (!userSelectedDate) return;

  disableDatePicker(); // Заблокувати вибір дати

  if (countdownInterval) clearInterval(countdownInterval); // Зупинити попередній інтервал

  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeDifference = userSelectedDate - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      iziToast.info({
        title: "Час вийшов",
        message: "Таймер завершено!",
        position: "topRight",
      });
      updateTimerDisplay(0, 0, 0, 0);
      enableDatePicker(); // Розблокувати вибір дати
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

