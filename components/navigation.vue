<template lang="html">
  <header id="header">
    <button v-if="!isLoggedIn" @click="action('login')">Log In</button>
    <button v-if="isLoggedIn" @click="action('logout')">Log Out</button>
  </header>
</template>

<script>
const netlifyIdentity = require("netlify-identity-widget");
import { mapGetters } from "vuex";
export default {
  mounted() {
    netlifyIdentity.init();
  },
  computed: {
    ...mapGetters("user", {
      isLoggedIn: "getUserStatus"
    })
  },
  methods: {
    action(action) {
      switch (action) {
        case "login":
          netlifyIdentity.open("login");
        case "logout":
          netlifyIdentity.logout();
          this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="css">

#header{
  padding:16px 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: white;
  border-bottom: 1px solid #ddd
}
#header button{
  background: white;
  border: 1px solid #ddd;
  padding: 14px 20px;
  color: #555;
  outline: none;
  border-radius: 5px;
  transition: transform .25s
}

#header button:active{
  transform: scale(.95)
}
</style>
