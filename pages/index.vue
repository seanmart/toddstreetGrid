<script>
export default {
  middleware: ({ store, redirect }) => {
    redirect(store.state.auth.loggedIn ? "/dashboard" : "/login");
  }
};
</script>

<style lang="css">
#welcome{
  background: #eee
}
</style>
