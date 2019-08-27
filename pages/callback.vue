<template lang="html">
  <div class=""></div>
</template>

<script>
export default {
  mounted() {
    if (this.$auth.loggedIn) {
      this.redirect();
    }
  },
  methods: {
    redirect() {
      if (this.$route.query.next && isRelativeURL(this.$route.query.next)) {
        this.$router.push(this.$route.query.next);
      } else {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="css" scoped></style>
