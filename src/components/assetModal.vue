<template>
  <div class="modal-bg">
    <div class="modal">
      <div class="modal-head">
        <h5>增加设备</h5>
        <span class="modal-close pointer" v-on:click="close()">关闭</span>
      </div>
      <div class="modal-body">
        <div class="list-head">

        </div>
        <div class="list-body">
          <div class="list-wrap">
            <ul class="list-head sys-flex sys-flex-center">
              <input class="" type="checkbox" v-on:click="checkedAll()"/>
              <li class="sys-flex-one">设备</li>
              <li class="wd150">设备条码</li>
              <li class="wd80">分类</li>
              <li class="wd150">规格型号</li>
              <li class="wd80">所属部门</li>
            </ul>
            <div class="list-body">
              <ul class="sys-flex sys-flex-center" v-for="item in assList">
                <input class="" type="checkbox" v-bind:value="item.id" v-bind:checked="item.checked" v-model="item.checked" v-on:click="checkOne(item)"/>
                <li class="sys-flex-one">{{item.title}}</li>
                <li class="wd150">{{item.bar_code}}</li>
                <li class="wd80">{{item.category_title}}</li>
                <li class="wd150">{{item.specs}}</li>
                <li class="wd80">{{item.org_title}}</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      <div class="modal-footer">
        <span class="cancel-btn btn mr20" v-on:click="close()">取消</span>
        <span class="save-btn btn" v-on:click="submit()">保存</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props : {
      info : Object
    },

    data(){
      return{
        checkAll : false,
        assList : []

      }
    },

    methods:{
      close(){
        this.$emit('modalClose', false)
      },

      getList(){
        let url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/assetList',
            params = {
              access_token : 'devcbc709ff4f988706a43cf7c7e521c5c'
            }
        this.$http.jsonp( url, {params : params}, ).then( (data)=>{
          if( data && data.body.code == 200 ){
            this.assList = data.body.data;
            console.log(this.assList);
          }else{
            alert('请求出错');
          }
        })
      },

      checkOne( data ){
        data.checked = !data.checked;
      },

      checkedAll(){

        this.checkAll = !this.checkAll;
        let checkall = this.checkAll;
        this.assList.forEach(function( v ){
          v.checked = checkall;
          console.log(v);
        })
      },



      submit(){

      }
    },

    created(){
      this.getList();
    }



  }
</script>
<style lang="less" scoped>
  .modal-bg{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    .modal{
      position: absolute;
      top: calc(~"50% - 250px");
      left: calc(~"50% - 400px");
      width: 800px;
      height: 500px;
      background-color: #fff;
      border-radius: 4px;
      .modal-head{
        height: 55px;
        line-height: 55px;
        padding: 0 20px;
        border-bottom: 1px solid #E5E5E5;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
      }
      .modal-body{
        padding: 20px;
        height: calc(~'100% - 150px');
        overflow-y: scroll;
        input{
          width: 150px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #e6e6e6;
          padding-left: 10px;
          border-radius: 2px;
          box-shadow: none;
        }
        .list-wrap{
          input{
            margin-top: 0;
            width: 50px;
          }
        }
      }
      .modal-footer{
        position: absolute;
        height: 55px;
        line-height: 55px;
        font-size: 14px;
        border-top: 1px solid #e5e5e5;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .btn{
          width: 80px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          background: #dcdcdc;
          display: inline-block;
          border-radius: 2px;
          cursor: pointer;
        }
        .save-btn{
          background-color: darkkhaki;
          color: #fff;
        }

      }
    }
  }
</style>
