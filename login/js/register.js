import { createCookie, setCookieExpiration } from './cookie.js'

const username = document.getElementById("username");
const password = document.getElementById("password");
const btnRegister = document.getElementById("register");
const failedRegister = document.getElementById("failed-register");
const successRegister = document.getElementById("success-register");

function removeTimeOutOnElement(element, duration) {
  clearTimeout(() => {
    element.style.display = "none";
  }, duration);
}

function displayElement(element, display, duration) {
  element.style.display = display;
  setTimeout(() => {
    element.style.display = "none";
  }, duration);
}

async function sendDataToAPI() {
  const dataToSend = {
    username: username.value,
    password: password.value,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToSend),
  };

  const apiUrl = "https://api-blind-code.vercel.app/register";

  try {
    const response = await fetch(apiUrl, requestOptions);

    const DURATION_FAILED_REGISTER_OR_REDIRECT_PAGE = 3000;
    const DURATION_SUCCESS_REGISTER = 2000;

    if (!response.ok) {
      displayElement(
        failedRegister,
        "block",
        DURATION_FAILED_REGISTER_OR_REDIRECT_PAGE
      );
      removeTimeOutOnElement(
        failedRegister,
        DURATION_FAILED_REGISTER_OR_REDIRECT_PAGE
      );
    } else {
      displayElement(successRegister, "block", DURATION_SUCCESS_REGISTER);
      removeTimeOutOnElement(successRegister, DURATION_SUCCESS_REGISTER);

      createCookie('key', username.value, setCookieExpiration)

      setTimeout(() => {
        window.location.assign(
          "https://mancode77.github.io/frontend-dev-portofolio/"
        );
      }, DURATION_FAILED_REGISTER_OR_REDIRECT_PAGE);

      clearTimeout(() => {
        window.location.assign(
          "https://mancode77.github.io/frontend-dev-portofolio/"
        );
      }, DURATION_FAILED_REGISTER_OR_REDIRECT_PAGE);
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}

btnRegister.addEventListener("click", function () {
  sendDataToAPI();
});
