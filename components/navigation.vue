<template lang="html">
  <header id="header" class="header-height">
    <template v-if="loggedIn">
      <h3>{{ user.name }}</h3>
      <button @click="$auth.logout()">Log Out</button>
    </template>
    <button v-if="!loggedIn" @click="$auth.loginWith('auth0')">Log In</button>
  </header>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["loggedIn", "user"])
  },
  methods: {
    logout() {
      this.$auth.logOut();
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
