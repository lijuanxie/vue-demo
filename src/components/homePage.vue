<template>
  <!--<div>-->
    <!--登录主页成功-->
  <!--</div>-->
  <div>
    <div class="facility-index">
      <ul class="list-head sys-flex sys-flex-center">
        <li class="wd80">状态</li>
        <li class="sys-flex-one">设备</li>
        <li class="wd150">设备条码</li>
        <li class="wd80">分类</li>
        <li class="wd150">规格型号</li>
        <li class="wd150">所属部门</li>
        <li class="wd80">操作</li>
      </ul>
      <div class="list-body">
        <ul class="list-item sys-flex sys-flex-center" v-for="item in assetList">
          <li class="wd80"><span v-bind:class="{'span-status-red':item.status == 2, 'span-status-blue' : item.status != 2}" class="span-status">{{item.status_show}}</span></li>
          <li class="sys-flex-one">{{item.title}}</li>
          <li class="wd150">{{item.bar_code}}</li>
          <li class="wd80">{{item.category_title}}</li>
          <li class="wd150">{{item.specs}}</li>
          <li class="wd150">{{item.org_title}}</li>
          <li class="wd80 pointer" @click="showModal = true">编辑</li>
        </ul>
      </div>
    </div>
    <v-modal v-if="showModal" v-on:closeModal="closeModal"></v-modal>
  </div>
</template>
<script>
  import { setCookie,getCookie,delCookie } from '../api/cookie.js'
  import modal from './addAsset'
  import $ from 'jquery'
  export default{
    data(){
      return{
        showModal : false,
        assetList : [],
      }
    },
    components: {
      'v-modal' : modal
    },
    methods:{
      getList(){
        let params = {
            'access_token' : 'dev36b3d540ab5506b4d8ab2b8b3cd0eff',
            'count': 20,
            'page': 1,
            'offset':0
          },
          url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/assetList?access_token=dev34c74553398c9fba670c9b0186106e5'
          this.$http.jsonp(url, params, {method : 'POST'}).then((data)=>{
            if( data && data.body.code == 200 ){
                this.assetList = data.body.data;
            }else{
                alert('请求出错');
            }
          })
      },
      closeModal( state){
        this.showModal = state;
        this.getList();
      }
    },
    created () {
      this.getList()
    },

  }
</script>
<style lang="less" scoped>
  @import "../assets/style/homepage";
</style>
