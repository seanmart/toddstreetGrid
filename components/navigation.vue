<template lang="html">
  <header id="header" class="header-height">
    <template v-if="isLoggedIn">
      <h3>{{ name }}</h3>
      <button @click="action('logout')">Log Out</button>
    </template>
    <button v-if="!isLoggedIn" @click="action('login')">Log In</button>
  </header>
</template>

<script>
const netlifyIdentity = require("netlify-identity-widget");
import { mapGetters, mapState } from "vuex";
export default {
  mounted() {
    netlifyIdentity.init();

    netlifyIdentity.on("login", user => {
      netlifyIdentity.close();
      this.$store.dispatch("user/UPDATE_USER", user);
    });
  },
  computed: {
    ...mapGetters("user", {
      isLoggedIn: "getUserStatus",
      name: "getUserFullName"
    })
  },
  methods: {
    action(action) {
      switch (action) {
        case "login":
          netlifyIdentity.open("login");

        case "logout":
          netlifyIdentity.logout();
          this.$store.dispatch("user/UPDATE_USER", null);
          this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="css">

#header{
  padding: 0px 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: white;
  border-bottom: 1px solid #ddd
}

#header button{
  flex: 0 0 auto;
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

#header h3{
  font-size: 16px;
  font-weight: lighter;
  margin-right: 20px;
}
</style>
