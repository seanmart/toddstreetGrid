import { getUserFromCookie } from "~/utils/auth";

export default {
  actions: {
    nuxtServerInit({ commit }, { req }) {
      if (!req) return;
      const user = getUserFromCookie(req);

      commit("user/SET_USER", user);
    }
  }
};
