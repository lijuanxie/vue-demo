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

      }
    },

    methods:{
      close(){
        this.$emit('modalClose', false)
      },

      submit(){

      }
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
        /*border:1px solid #e6e6e6;*/
        input{
          width: 150px;
          height: 30px;
          line-height: 30px;
          border: 1px solid #e6e6e6;
          padding-left: 10px;
          border-radius: 2px;
          box-shadow: none;
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
