<template>
  <div class="container">
    <div v-if="isLoggedIn" class="logged-in">
      you are logged in
    </div>
    <div v-if="!isLoggedIn" class="logged-out">
      you are logged out
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("user", {
      isLoggedIn: "getUserStatus"
    })
  }
};
</script>

<style></style>
