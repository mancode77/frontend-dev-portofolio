import { createCookie, calculateCookieExpiration } from "./cookie.js";

const username = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("login");
const failedLogin = document.getElementById("failed-login");
const successLogin = document.getElementById("success-login");

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

function setLoadingElement(element) {
  element.innerHTML = '<div class="spinner-border spinner-border-sm"></div>';
}

async function sendDataToAPI() {
  const btnOriginal = btnLogin.innerHTML;
  setLoadingElement(btnLogin);
  const dataToSend = {
    username: username.value,
    password: password.value,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": `key=${getCookie("key")}`
    },
    body: JSON.stringify(dataToSend),
  };

  const apiUrl = "https://api-blind-code.vercel.app/login";

  try {
    const response = await fetch(apiUrl, requestOptions);

    const DURATION_FAILED_LOGIN_OR_REDIRECT_PAGE = 3000;
    const DURATION_SUCCESS_LOGIN = 2000;

    if (!response.ok) {
      displayElement(
        failedLogin,
        "block",
        DURATION_FAILED_LOGIN_OR_REDIRECT_PAGE
      );
      removeTimeOutOnElement(
        failedLogin,
        DURATION_FAILED_LOGIN_OR_REDIRECT_PAGE
      );
    } else {
      displayElement(successLogin, "block", DURATION_SUCCESS_LOGIN);
      removeTimeOutOnElement(successLogin, DURATION_SUCCESS_LOGIN);

      setTimeout(() => {
        window.location.assign(
          "https://mancode77.github.io/frontend-dev-portofolio/"
        );
      }, DURATION_FAILED_LOGIN_OR_REDIRECT_PAGE);

      clearTimeout(() => {
        window.location.assign(
          "https://mancode77.github.io/frontend-dev-portofolio/"
        );
      }, DURATION_FAILED_LOGIN_OR_REDIRECT_PAGE);
    }
  } catch (error) {
    console.error("Error: ", error);
  }
  btnLogin.innerHTML = btnOriginal;
}

btnLogin.addEventListener("click", function () {
  sendDataToAPI();
});
