<template>
  <div>
    <div class="facility-index">
      <div class="top-search">
        <div class="add-btn pointer" v-on:click="showModal = true">
          新增设备
        </div>
      </div>

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
          <li class="wd80 pointer" @click="showModal = true" v-on:click="editAsset( item.id, item )">编辑</li>
        </ul>
      </div>
    </div>
    <v-modal v-if="showModal" :form="form" v-on:closeModal="closeModal"></v-modal>
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
        edit_id : '',
        form : {
          id : '',
          info : ''
        }
      }
    },
    components: {
      'v-modal' : modal
    },
    methods:{
      getList(){
        let params = {
            'access_token' : 'devbd522da321736b5f4168765057c9dfc',
            'count': 20,
            'page': 1,
            'offset':0
          },
          url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/assetList?access_token=devbd522da321736b5f4168765057c9dfc'
        this.$http.jsonp(url, params, {method : 'POST'}).then((data)=>{
          if( data && data.body.code == 200 ){
            this.assetList = data.body.data;
          }else{
            alert('请求出错');
          }
        })
      },
      editAsset( id,item ){
        this.form = {
          id : id,
          info : item
        }
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

  .top-search{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    .add-btn{
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: darkkhaki;
      color: #fff;
    }
  }
</style>

