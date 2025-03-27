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
      startButton.disabled = true; // Заблокувати кнопку
    } else {
      startButton.disabled = false; // Розблокувати кнопку
    }
  },
});

// Блокуємо кнопку "Start" на початку
startButton.disabled = true;

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
      daysSpan.textContent = "00";
      hoursSpan.textContent = "00";
      minutesSpan.textContent = "00";
      secondsSpan.textContent = "00";
      return;
    }
    function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      
      console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
      console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
      console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
      

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysSpan.textContent = days.toString().padStart(2, "0");
    hoursSpan.textContent = hours.toString().padStart(2, "0");
    minutesSpan.textContent = minutes.toString().padStart(2, "0");
    secondsSpan.textContent = seconds.toString().padStart(2, "0");
  }, 1000);
});