<template lang="html">
  <div class="navigation-spacer">
    <header>
      <div class="container navigation-container">
        <div class="left"></div>
        <div class="right">
          <button class="button logout" type="button" @click="$auth.logout()">
            logout
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.navigation-spacer, header{
  height: 80px;
}

header{
  animation: slide-down .5s backwards;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  border-bottom: 1px solid #eee;
}

.navigation-container{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.left, .right{
  flex: 0 0 auto;
}

.right{
  margin-left: auto;
}

.button.logout{
  background: #03bbdc;
  color: white;
}

@keyframes slide-down{
  from{transform: translateY(-100%)}
  to{transform: translateY(0px)}
}
</style>
