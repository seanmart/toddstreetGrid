<template>
  <div id="site">
    <navigation />
    <nuxt />
  </div>
</template>
<script>
import navigation from "@/components/navigation";
export default {
  components: { navigation }
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

/* ========= GLOBAL STYLES ========= */
#site {
  animation: fade-in 0.25s backwards;
  animation-delay: 0.25s;
}

.header-height {
  height: 80px;
}

.container {
  padding-top: 80px;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
