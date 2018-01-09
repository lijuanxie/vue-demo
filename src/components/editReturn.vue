<template>
  <div class="modal-bg">
    <div class="modal">
      <div class="modal-head">
        <h5>增加设备</h5>
        <span class="modal-close pointer">关闭</span>
      </div>
      <div class="modal-body">
        <div class="sys-flex">
          <div class="list-item mr20">
            <label>退还人：</label>
            <input class="wd200 mt0" placeholder="退还人" v-model="form.info.backUser">
          </div>
          <div class="list-item">
            <label>退库时间：</label>
            <input class="wd200 mt0" placeholder="退还人" v-model="form.info.backTime">
          </div>
        </div>
        <div class="list-item">
          <label>退还说明：</label>
          <input class="wd200" placeholder="退还说明" v-model="form.info.backInfo">
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
  export default {
    props : {
      form : Object
    },
    data(){
      return{
        access_token : 'devecddc9a69644108acedbbd14294c384'
      }
    },

    close(){
      this.$emit( 'closeModal', false)
    },

    submit(){
      this.$emit( 'closeModal', false)
    }


  }
</script>
<style lang="less" scoped>
  select{
    appearance:none;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
    background: #fff;
    padding: 0 15px 0 10px;
    &:focus{
      outline: none;
    }
  }
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
