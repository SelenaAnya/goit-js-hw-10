import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const delay = parseInt(form.elements["delay"].value); // Отримуємо значення затримки
  const state = form.elements["state"].value; // Отримуємо обраний стан (fulfilled або rejected)

  if (isNaN(delay)) {
    iziToast.error({
      title: "Error",
      message: "Please enter a valid delay!",
    });
    return;
  }

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});

// Функція створення промісу
function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else if (state === "rejected") {
        reject(delay);
      }
    }, delay);
  });
}

//Стилізація form
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "16px";
form.style.maxWidth = "400px";
form.style.margin = "0 auto";
form.style.padding = "16px";
form.style.border = "1px solid #ccc";
form.style.borderRadius = "4px";
form.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

//стилізація fp
const fp = form.querySelector(".fp");
fp.style.display = "flex";
fp.style.width = "100%";
fp.style.flexDirection = "column";
fp.style.alignItems = "left";
fp.style.gap = "16px";
fp.style.fontSize = "16px";
fp.style.fontWeight = "500";


// стилізація filter
const filter = form.querySelector(".filter");
filter.style.alignItems = "left";
filter.style.gap = "8px";
filter.style.fontSize = "16px";
filter.style.fontWeight = "500";
