<template>
  <div>
    登录主页成功
  </div>
</template>
<script>
  import { setCookie,getCookie,delCookie } from '../api/cookie.js'
  export default{
    data(){
      return{
        name: ''
      }
    },
    mounted(){
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let uname = getCookie('username')
      this.name = uname
      /*如果cookie不存在，则跳转到登录页*/
      if(uname == ""){
        this.$router.push('/')
      }
    },
    methods:{
      quit(){
        /*删除cookie*/
        delCookie('username')
      }
    }
  }
</script>
