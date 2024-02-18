/**
 * Mendapatkan elemen HTML dengan ID yang ditentukan.
 * 
 * @param {string} id ID elemen yang ingin diambil.
 * @returns {HTMLElement|null} Elemen dengan ID yang diberikan, atau null jika tidak ditemukan.
 */
const username = document.getElementById("username");
const password = document.getElementById("password");
const btnRegister = document.getElementById("register");
const failedRegister = document.getElementById("failed-register");
const successRegister = document.getElementById("success-register");

/**
 * Hapus timeout yang disetel pada elemen setelah durasi tertentu.
 * 
 * @param {HTMLElement} element Elemen untuk menghapus timeoutnya.
 * @param {number} duration Durasi dalam milidetik untuk menunggu sebelum menyembunyikan elemen.
 */
function removeTimeOutOnElement(element, duration) {
  clearTimeout(() => {
    element.style.display = "none";
  }, duration);
}

/**
 * Menampilkan elemen selama durasi tertentu dan kemudian menyembunyikannya.
 * 
 * @param {HTMLElement} element Elemen untuk ditampilkan dan disembunyikan.
 * @param {string} display Gaya tampilan yang akan disetel (misalnya, "block", "inline").
 * @param {number} duration Durasi dalam milidetik untuk menampilkan elemen.
 */
function displayElement(element, display, duration) {
  element.style.display = display;
  setTimeout(() => {
    element.style.display = "none";
  }, duration);
}

/**
 * Mengatur HTML bagian dalam elemen ke indikator pemuatan spinner.
 * 
 * @param {HTMLElement} element Elemen untuk menyetel kontennya.
 */
function setLoadingElement(element) {
  element.innerHTML = '<div class="spinner-border spinner-border-sm"></div>';
}

/**
 * Mengirim data registrasi ke API dan menangani responsnya.
 * 
 * @async
 */
async function sendDataToAPI() {
  const btnOriginal = btnRegister.innerHTML;
  setLoadingElement(btnRegister);

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

      /**
       * Buat cookie "key" dengan nilai username dan masa berlaku yang dihitung dari fungsi `calculateCookieExpiration`.
       */
      createCookie("key", username.value, calculateCookieExpiration);

      // Redirect ke halaman portofolio setelah durasi tertentu
      setTimeout(() => {
        window.location.assign(
          "https://mancode77.github.io/frontend-dev-portofolio/"
        );
      }, DURATION_FAILED_REGISTER_OR_REDIRECT_PAGE);

      // Batalkan redirect jika setTimeout sebelumnya tidak sempat dijalankan
      clearTimeout(() => {
        window.location.assign(
          "https://mancode77.github.io/frontend-dev-portofolio/"
        );
      }, DURATION_FAILED_REGISTER_OR_REDIRECT_PAGE);
    }
  } catch (error) {
    console.error("Error: ", error);
  }
  btnRegister.innerHTML = btnOriginal;
}
