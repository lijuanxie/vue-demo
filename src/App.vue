<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->
  <!--</div>-->
  <div id="app" class="page-container flex">
    <div class="container">
      <h1>Login</h1>
      <div class="login-wrap">
        <input type="text" name="account" class="username"placeholder="account">
        <input type="password" name="password" class="password" placeholder="Password">
        <div class="register">立即注册</div>
        <button class="pointer" type="submit">登录</button>
        <div class="error">
          <span>+</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
