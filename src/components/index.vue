<template>
  <div class="asset-wrap">
    <div class="title">设备管理系统</div>
    <div class="asset-left">
      <ul>
        <li class="active"><router-link :to="{name: 'manage'}">设备管理</router-link></li>
        <li><router-link :to="{name: 'return'}">领用/退坏</router-link></li>
        <li><router-link :to="{name: 'sort'}">设备分类</router-link></li>
      </ul>


    </div>
  </div>
</template>

<script>
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
    .asset-left{
      width: 250px;
      height: calc(~'100% - 50px');
      border: 1px solid #ebebeb;
      text-align: center;
      padding: 30px 0px;
      li{
        height: 40px;
        line-height: 40px;
        a{
          color: #333;
          text-decoration: none;

        }
      }
      .active{
        background-color: #fda84d;
        a{
          color: rgba(255, 255, 255, .8);
        }
      }

    }


  }


</style>
