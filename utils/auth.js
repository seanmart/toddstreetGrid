import jwtDecode from "jwt-decode";
import Cookie from "js-cookie";

export const setToken = token => {
  if (process.SERVER_BUILD) return;
  Cookie.set("jwt", token, { expires: 1 });
};

export const unsetToken = () => {
  if (process.SERVER_BUILD) return;
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
