<template>
  <div>
    <div class="facility-index">
      <div class="top-search">
        <div class="search-input">
          <input type="text"/>
          <span class="icon-search">搜索</span>
        </div>
        <select class="sort-select" v-model="category_id" v-on:change="getList()">
          <option class="" v-bind:value="-1">全部分类</option>
          <option class="" v-bind:value="item.id" v-for="item in sortList">{{item.title}}</option>
        </select>
        <select class="sort-select" v-model="status" v-on:change="getList()">
          <option class="" v-bind:value="-1">全部状态</option>
          <option class="" v-bind:value="item.status" v-for="item in statusList">{{item.title}}</option>
        </select>
        <div class="sys-flex sys-flex-center" style="position: relative">
          <select class="title-select" v-model="type" v-on:change="getList()">
            <option class="title" v-bind:value="'title'">名称</option>
            <option class="bar_code" v-bind:value="'bar_code'">条码</option>
            <option class="specs" v-bind:value="'specs'">型号</option>
          </select>
          <input type="text" class="title-input" placeholder="设备名称、条码、型号" v-model="key"/>
          <span class="icon-search" v-on:click="getList()" style="position: absolute;right: 25px;top:10px;font-size: 12px;">搜索</span>
        </div>
        <div class="add-btn pointer" v-on:click="editAsset('','')">
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
          <li class="wd80 pointer" v-on:click="editAsset( item.id, item )">编辑</li>
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
        sortList : [],
        statusList : [{title : '在库',status : 2},{title : '领出', status : 3}],
        edit_id : '',
        form : {
          id : '',
          info : ''
        },
        category_id : '-1',
        status : '-1',
        type : 'title',
        key : '',
        access_token : 'devcbc709ff4f988706a43cf7c7e521c5c'
      }
    },
    components: {
      'v-modal' : modal
    },
    methods:{
      getList(){
        let params = {
            'access_token' : this.access_token,
            'count': 20,
            'page': 1,
            'offset':0,
            'category_id':this.category_id == '-1' ? '' : this.category_id,
            'statuses':this.status == '-1' ? '' : this.status,
            'title' : this.type == 'title' ? this.key : '',
            'bar_code' : this.type == 'bar_code' ? this.key : '',
            'specs' : this.type == 'specs' ? this.key : ''
          },
          url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/assetList'
        this.$http.jsonp(url, {params : params}, {method : 'POST'}).then((data)=>{
          if( data && data.body.code == 200 ){
            this.assetList = data.body.data;
          }else{
            alert('请求出错');
          }
        })
      },
      editAsset( id,item ){
        this.showModal = true
        if( id ){
          this.form = {
            id : id,
            info : item
          }
        }else{
          this.form = {
            id : '',
            info : {}
          }
        }

      },

      getSort(){
        let params = {

          },
          url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/categoryList?access_token=' + this.access_token;
        this.$http.jsonp(url, {}, {method : 'POST'}).then((data)=>{
          if( data && data.body.code == 200 ){
            this.sortList = data.body.data;
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
      this.getList();
      this.getSort();
    },

  }
</script>
<style lang="less" scoped>
  @import "../assets/style/homepage";

  .top-search{
    display: flex;
    margin-bottom: 20px;
    .add-btn{
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: darkkhaki;
      color: #fff;
    }
    .search-input{
      position: relative;
      height: 30px;
      width: 120px;
      margin-right: 20px;
      input{
        position: absolute;
        top:0px;
        right:0px;
        width:120px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #e6e6e6;
        background-color: #fff;
        margin-top: 0;
        box-sizing: border-box;
        border-radius: 2px;
      }
      span{
        position: absolute;
        right: 5px;
        top:10px;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .sort-select{
      width: 120px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #e6e6e6;
      margin-right: 20px;
      outline: none;
    }
    .title-select{
      width:60px;
      height: 30px;
      border: 1px solid #e6e6e6;
      outline: none;
    }
    .title-input{
      width: 150px;
      height: 30px;
      line-height: 30px;
      border-radius: 2px;
      border: 1px solid #e6e6e6;
      margin-right: 20px;
      margin-top: 0;
      outline: none;
    }

  }
</style>

