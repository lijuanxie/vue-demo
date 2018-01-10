<template>
  <div>
    <div class="facility-index">
      <div class="top-search">
        <div class="search-input">
          <input type="text"/>
          <span class="icon-search">搜索</span>
        </div>
        <select class="sort-select" v-model="this.category_id">
          <option v-bind:value="-1">全部分类</option>
          <option class="" v-bind:value="item.id" v-for="item in sortList">{{item.title}}</option>
        </select>
        <select class="sort-select" v-model="this.status">
          <option v-bind:value="-1">全部状态</option>
          <option class="" v-bind:value="item.id" v-for="item in statusList">{{item.title}}</option>
        </select>
        <div class="sys-flex sys-flex-center" style="position: relative">
          <select class="title-select" v-model="type">
            <option class="title" v-bind:value="'title'">名称</option>
            <option class="member" v-bind:value="'member'">人员</option>
            <option class="odd_number" v-bind:value="'odd_number'">单号</option>
          </select>
          <input type="text" class="title-input" placeholder="设备名称、条码、型号" v-model="key"/>
          <span class="icon-search" style="position: absolute;right: 25px;top:10px;font-size: 12px;">搜索</span>
        </div>

        <div class="add-btn pointer mr20" v-on:click="editReturn('return')">
          新增退还
        </div>
        <div class="add-btn pointer" v-on:click="editReturn('use')">
          新增领用
        </div>
      </div>

      <ul class="list-head sys-flex sys-flex-center">
        <li class="sys-flex-one">领/退单号</li>
        <li class="wd150">领/退日期</li>
        <li class="wd150">领/退人</li>
        <li class="wd150">设备条码</li>
        <li class="wd150">设备名称</li>
        <li class="wd150">设备型号</li>
      </ul>
      <div class="list-body">
        <ul class="list-item sys-flex sys-flex-center" v-for="item in useList">
          <li class="sys-flex-one sys-flex">
            <span v-bind:class="{'span-status-red':item.operate == 'asset_back', 'span-status-blue' : item.operate != 'asset_back'}" class="span-status mr10">{{item.operate == 'asset_back' ? '退还' : (item.operate == 'use' ? '领用' : '流传')}}</span>
            {{item.odd_number}}
          </li>
          <li class="wd150">{{item.use_back_time}}</li>
          <li class="wd150">{{item.use_back_name}}</li>
          <li class="wd150">{{item.bar_code}}</li>
          <li class="wd150">{{item.title}}</li>
          <li class="wd150">{{item.specs}}</li>
        </ul>
      </div>
    </div>
    <v-modal v-if="showModal" :form="form" v-on:closeModal="closeModal"></v-modal>
  </div>
</template>
<script>
  import $ from 'jquery'
  import modal from './editReturn'
  export default {
    data(){
      return{
        sortList : [],
        useList : [],
        statusList : [{id : 1, title : '领用'}, {id : 2, title : '流转'}, {id : 3, title : '退还'}],
        category_id : '-1',
        status : '-1',
        type : 'title',
        key : '',
        showModal : false,
        form : {
          id : '',
          info : ''
        },
        access_token : 'deva82a05ca90386ba1b23ccb12c68d00b',
      }
    },

    components : {
      'v-modal' : modal
    },

    methods : {
      getSort(){
        let url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/categoryList?access_token=' + this.access_token;
        this.$http.jsonp( url, {}, {method : 'POST'}).then((data)=>{
          if( data && data.body.code == 200 ){

            this.sortList = data.body.data;
          }else{
            alert('请求出错');
          }
        })
      },

      getList(){
        let url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/CorAssetUseRecord?access_token=' + this.access_token,
            params = {

            }
        this.$http.jsonp( url, {params : {}}).then( (data)=> {
          console.log( data, 333);
          if( data && data.body.code == 200 ){
              this.useList = data.body.data;
          }else{
            alert( data.body.msg )
          }
        })
      },

      editReturn(type){
        this.showModal = true;
        this.form = {
          info : {
            type : type
          }
        }

      },

      closeModal(){
        this.showModal = false;
        this.getList();
      }
    },

    created(){
      this.getSort();
      this.getList();
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/style/homepage.less";
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
    outline: none;
    &:focus{
      outline: none;
    }
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

