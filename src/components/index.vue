<template>
  <div class="asset-wrap">
    <div class="title">设备管理系统</div>
    <div class="asset-wrap-body">
      <div class="asset-left">
        <ul>
          <li class="" v-bind:class="{'active' : nav == 1}" v-on:click="changeNav(1)"><router-link :to="{name: 'manage'}">设备管理</router-link></li>
          <li v-bind:class="{'active' : nav == 2}" v-on:click="changeNav(2)"><router-link :to="{name: 'return'}">领用/退坏</router-link></li>
          <li v-bind:class="{'active' : nav == 3}" v-on:click="changeNav(3)"><router-link :to="{name: 'sort'}">设备分类</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
          nav : 1
      }
    },
    methods:{
      changeNav( type ){
        this.nav = type;
      }

    },
  }
</script>
<style lang="less" scoped>
  .asset-wrap{
    width: 1200px;
    height: calc(~'100% - 20px');
    margin: auto;
    .title{
      font-size: 20px;
      color: #fff;
      padding-left: 20px;
      line-height: 50px;
      height: 50px;
      background-color: darkkhaki;
    }
    .asset-wrap-body{
      display: flex;
      height: calc(~'100% - 50px');
      .asset-left{
        width: 250px;
        height: 100%;
        border: 1px solid #ebebeb;
        text-align: center;
        padding: 30px 0px;
        box-sizing: border-box;
        li{
          height: 40px;
          line-height: 40px;
          a{
            color: #333;
            text-decoration: none;
          }
        }
        .active{
          background-color: darkkhaki;
          a{
            color: rgba(255, 255, 255, .8);
          }
        }

      }
    }



  }


</style>
