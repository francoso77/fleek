<template>
  <div class="about">
    <h1>App piloto para teste do Vuex e VueRouter</h1>
    <input type="button" value="Login" @click="login()">
    <input type="button" value="Logout" @click="logout()">
  </div>
</template>

<script lang="ts">
import Login from '../views/AboutViewCls'
export default Login
</script>
<style scoped src="./AboutViewCss.css">
  