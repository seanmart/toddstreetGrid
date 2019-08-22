export default {
  state: () => ({
    user: null
  }),
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  getters: {
    userStatus: state => !!state.user,
    user: state => JSON.parse(state.user)
  }
};
