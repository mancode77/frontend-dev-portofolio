export function calculateCookieExpiration(days) {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
  return expirationDate.toUTCString();
}

export function createCookie(name, value, days) {
  let expires = "";
  if (days) {
    expires = "; expires=" + calculateCookieExpiration(days);
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}
