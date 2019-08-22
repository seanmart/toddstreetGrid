export default {
  state: () => ({
    user: process.browser ? window.localStorage.getItem("user") : null
  }),
  getters: {
    getUserStatus: state => !!state.user
  }
};
