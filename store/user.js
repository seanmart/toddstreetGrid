import { setToken, unsetToken } from "@/utils/auth";

export default {
  state: () => ({
    user: null
  }),
  mutations: {
    SET_USER(state, user) {
      state.user = user || null;
    }
  },
  actions: {
    UPDATE_USER({ commit }, user) {
      commit("SET_USER", user);
      user ? setToken(user.token) : unsetToken();
    }
  },
  getters: {
    getUserStatus: state => !!state.user
  }
};
