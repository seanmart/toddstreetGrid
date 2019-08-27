<template lang="html">
  <div id="login" class="container fullwidth fullheight">
    <div class="login-module">
      <h1>this is the login module</h1>
      <button
        class="button login big"
        type="button"
        @click="$auth.loginWith('auth0')"
      >
        login
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
#login{
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-module{
  padding: 40px;
  border: 1px solid #eee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.login-module h1{
  font-size: 16px;
  margin-bottom: 20px;
}

.button.login{
  color: white;
  background: #25cf79;
}
</style>
