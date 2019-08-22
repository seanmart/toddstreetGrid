export default {
  state: () => ({
    user: null
  }),
  mutations: {
    SET_USER(state, user) {
      state.user = user ? JSON.parse(user) : null;
    }
  },
  getters: {
    getUserStatus: state => !!state.user,
    getUserName: (state, getters) => {
      if (!getters.getUserStatus) return "";
      return state.user.user_metadata.full_name;
    }
  }
};
