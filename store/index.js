import { getUserFromCookie, getUserFromLocalStorage } from "~/utils/auth";

export default {
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (!req) return;
      const user = !process.browser
        ? getUserFromCookie(req)
        : getUserFromLocalStorage();

      commit("user/SET_USER", user);
    }
  }
};
