import Cookies from 'js-cookie';

export function setCookie(name, value, exdays = 1) {
  Cookies.set(name, value, { expires: exdays });
}

export function getCookie(name) {
  return Cookies.get(name);
}

export function removeCookie(name) {
  Cookies.remove(name);
}

export function deleteCookie(name) {
  Cookies.remove(name);
}
