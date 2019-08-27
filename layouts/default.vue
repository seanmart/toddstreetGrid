<template>
  <div>
    <navigation v-if="loggedIn" />
    <nuxt />
  </div>
</template>
<script>
import navigation from "@/components/navigation";
import { mapState } from "vuex";
export default {
  components: { navigation },
  computed: {
    ...mapState("auth", ["loggedIn"])
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1200px;
  padding: 20px;
  margin: 0px auto;
}

.container.fullwidth {
  max-width: initial;
}

.container.fullheight {
  min-height: 100vh;
}

.container.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 12px 16px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  transition: transform 0.25s;
}

.button.big {
  padding: 14px 24px;
  font-size: 14px;
}

.button:active {
  transform: scale(0.95);
}
</style>
