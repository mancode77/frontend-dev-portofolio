/**
 * Memeriksa apakah terdapat cookie tertentu dan melakukan tindakan berdasarkan ada/tidaknya cookie tersebut.
 */
function checkCookie() {
  const cookieName = "key"; // Nama cookie yang akan diperiksa
  const myCookie = getCookie(cookieName); // Mendapatkan nilai cookie

  if (!myCookie) {
    redirectToLoginPage(); // Tidak ada cookie, redirect ke halaman login
  } else {
    redirectToHomepageIfNeeded(); // Ada cookie, periksa dan redirect ke homepage jika perlu
  }
}

/**
 * Mendapatkan nilai cookie dengan nama tertentu.
 * 
 * @param {string} cookieName Nama cookie yang ingin diambil nilainya.
 * @returns {string|null} Nilai cookie jika ditemukan, null jika tidak.
 */
function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }

  console.log(cookieArray);

  return null;
}

const DEV_URI = "http://127.0.0.1:5500" // Dev Env
const PROD_URI = "https://mancode77.github.io/frontend-dev-portofolio"; // Prod Env

/**
 * Mengalihkan pengguna ke halaman login.
 */
function redirectToLoginPage() {
  window.location.assign(`${PROD_URI}/login/login.html`);
}

/**
 * Mengalihkan pengguna ke homepage jika skrip belum dijalankan sebelumnya.
 */
function redirectToHomepageIfNeeded() {
  if (!sessionStorage.getItem("scriptExecuted")) {
    redirectToHomepage();
    sessionStorage.setItem("scriptExecuted", true); // Tandai skrip sudah dijalankan
  }
}

/**
 * Mengalihkan pengguna ke homepage.
 */
function redirectToHomepage() {
  window.location.assign(`${PROD_URI}/login/login.html`);
}

window.onload = checkCookie; // Jalankan checkCookie saat halaman dimuat
