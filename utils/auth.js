import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";

export const setToken = token => {
  if (process.SERVER_BUILD) return;
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("user", JSON.stringify(token));
  Cookie.set("jwt", token);
};

export const unsetToken = () => {
  if (process.SERVER_BUILD) return;
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  Cookie.remove("jwt");
};

export const getUserFromCookie = req => {
  if (!req.headers.cookie) return;
  const jwtCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith("jwt="));
  if (!jwtCookie) return;
  const jwt = jwtCookie.split("=")[1];
  return jwtDecode(jwt);
};

export const getUserFromLocalStorage = () => {
  return window.localStorage.user;
};
