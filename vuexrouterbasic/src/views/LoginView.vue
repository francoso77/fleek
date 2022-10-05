<template>
  <div class="about">

    <h1>Tela de login</h1>

    <input type="button" value="Login" @click="login()"/>
    <input type="button" value="Logout" @click="logout()"/>
  </div>
</template>

<script lang="ts">
import x from './LoginViewCls'
export default x
</script>
