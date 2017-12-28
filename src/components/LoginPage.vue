<template>
  <div id="app" class="login-container flex">
    <div class="container" v-show="showLogin">
      <h1>登录</h1>
      <div class="login-wrap">
        <input type="text" name="account" v-model="username" class="username"placeholder="account">
        <input type="password" name="password" v-model="password" class="password" placeholder="Password">
        <div class="register">没有账号？立即注册</div>
        <button class="pointer" v-on:click="login()">登录</button>
      </div>
    </div>
    <div class="container" v-show="!showLogin">
      <h1>注册</h1>
      <div class="login-wrap">
        <input type="text" name="account" v-model="username" class="username"placeholder="account">
        <input type="password" name="password" v-model="password" class="password" placeholder="Password">
        <div class="register">已有账号？立即登录</div>
        <button class="pointer">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {setCookie, getCookie } from '../api/cookie.js'
  import homePage from '@/components/homePage'
  export default{
    data(){
      return{
        showLogin: true,
        showRegister: false,
        username: '',
        password: '',
        newUsername: '',
        newPassword: ''
      }
    },
    mounted(){
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if(getCookie('username')){
//        this.$router.push('/home')
        console.log('直接进入主页');
      }
    },
    methods:{
      login(){
        this.$router.push({name : 'homePage'});
        return;
//          if( this.username == '' || this.password == '' ){
//            alert('请输入用户名或者密码');
//          }else{
//              let params = {
//                'account' : this.username,
//                'password' : this.password
//              }
//              this.$http.post('http://localhost:8090/Dev/user/login.do', params).then((res)=>{
//                console.log(params, 'res')
//                if( res.data == -1){
//                    alert('该用户不存在')
//                }else if( res.data == 0 ){
//                    alert( '密码输入错误' );
//                }else{
//                  alert('登录成功');
//                  setCookie('username', this.name, 1000*60)
//                  setTimeout(function(){
//                    console.log('跳转页面');
////                    this.$router.push('/homePage')
//                  }.bind(this),1000)
//                }
//            })
//          }
      }
    },

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../assets/style/login";
</style>
