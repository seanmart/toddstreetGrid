import jwtDecode from "jwt-decode";

export default {
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (!req) return;
      if (!req.headers.cookie) return;
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("nf_jwt="));
      if (!jwtCookie) return;
      const jwt = jwtCookie.split("=")[1];

      commit("user/SET_USER", jwtDecode(jwt));
    }
  }
};
