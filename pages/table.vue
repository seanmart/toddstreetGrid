<template lang="html">
  <div class="protected">
    this is protected
  </div>
</template>

<script>
export default {
  middleware: "authenticated"
};
</script>

<style lang="css">
.protected{
  padding: 100px;
}
</style>
