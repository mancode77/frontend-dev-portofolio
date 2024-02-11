export function setCookieExpiration() {
  const date = new Date();

  date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); 

  return date.toUTCString();
}

export function createCookie(name, value, days) {
  let expires = "";

  if (days) {
    const expirationDate = new Date();

    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    
    expires = "; expires=" + expirationDate.toUTCString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}
