function checkCookie() {
  const cookieName = "key";
  const myCookie = getCookie(cookieName);
  if (myCookie === "") {
    // Jika cookie belum ada, arahkan pengguna ke halaman login
    window.location.href = "http://127.0.0.1:5500/login/login.html";
  }
}

// Fungsi untuk mendapatkan nilai cookie
function getCookie(cookieName) {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

// Memeriksa cookie saat halaman dimuat
window.onload = checkCookie;
