function checkCookie() {
  const cookieName = "key";
  const myCookie = getCookie(cookieName);

  if (myCookie === "") {
    window.location.assign("http://127.0.0.1:5500/login/login.html");
  } else {
    if (!sessionStorage.getItem("scriptExecuted")) {
      redirectToHomepage();

      sessionStorage.setItem("scriptExecuted", true);
    }

    function redirectToHomepage() {
      window.location.assign("http://127.0.0.1:5500/");
    }
  }
}

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

window.onload = checkCookie;
