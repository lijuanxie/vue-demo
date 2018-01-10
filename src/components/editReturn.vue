<template>
  <div class="modal-bg">
    <div class="modal">
      <div class="modal-head">
        <h5>增加设备</h5>
        <span class="modal-close pointer" v-on:click="close()">关闭</span>
      </div>
      <div class="modal-body">
        <div class="sys-flex">
          <div class="list-item mr20" v-if="form.info.type == 'return'">
            <label>退还人：</label>
            <input class="wd200 mt0" placeholder="退还人" v-model="form.info.backUser">
          </div>
          <div class="list-item mr20" v-if="form.info.type == 'use'">
            <label>领用人：</label>
            <input class="wd200 mt0" placeholder="退还人" v-model="form.info.backUser">
          </div>
          <div class="list-item" v-if="form.info.type == 'use'">
            <label>领用时间：</label>
            <input class="wd200 mt0" placeholder="退还人" v-model="form.info.useTime">
          </div>
          <div class="list-item" v-if="form.info.type == 'return'">
            <label>退库时间：</label>
            <input class="wd200 mt0" placeholder="退还人" v-model="form.info.backTime">
          </div>
        </div>
        <div class="list-item" v-if="form.info.type == 'use'">
          <label>领用说明：</label>
          <input class="wd400" placeholder="退还说明" v-model="form.info.backInfo">
        </div>
        <div class="list-item" v-if="form.info.type == 'return'">
          <label>退还说明：</label>
          <input class="wd400" placeholder="退还说明" v-model="form.info.backInfo">
        </div>
        <div class="addAsset">
          <div class="addAsset-btn sys-flex sys-flex-center">
            <span class="wd80 add btn mr20" v-on:click="addFacility()">新增设备</span>
            <span class="wd80 delete btn" v-on:click="del()">删除</span>
          </div>
          <div class="list-wrap">
            <ul class="list-head sys-flex sys-flex-center">
              <li class="sys-flex-one">设备</li>
              <li class="wd150">设备条码</li>
              <li class="wd80">分类</li>
              <li class="wd150">规格型号</li>
              <li class="wd80">所属部门</li>
              <li class="wd80">操作</li>
            </ul>
            <div class="list-body">
              <ul class="sys-flex sys-flex-center">
                <li class="sys-flex-one">小米手机</li>
                <li class="wd150">52222</li>
                <li class="wd80">手机</li>
                <li class="wd150">5656</li>
                <li class="wd80">产品部</li>
                <li class="wd80">删除</li>
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
    <v-modal v-if="modalShow" v-on:modalClose="modalClose" :info="info"></v-modal>
  </div>
</template>
<script>
  import modal from './assetModal'
  export default {
    props : {
      form : Object
    },
    data(){
      return{
        modalShow : false,
        access_token : 'devecddc9a69644108acedbbd14294c384',
        info : {
          data : ''
        }
      }
    },

    components : {
      'v-modal' : modal
    },

    methods : {
      close(){
        this.$emit( 'closeModal', false)
      },

      addFacility(){
        this.modalShow = true;
      },

      modalClose(){
        this.modalShow = false;
      },

      submit(){
        this.$emit( 'closeModal', false)
      }
    },
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
        .addAsset{
          width: 100%;
          height: 230px;
          border: 1px solid #ebebeb;
          margin-top: 20px;
          padding: 20px;
          box-sizing: border-box;
          .btn{
            display: inline-block;
            height: 30px;
            border: 1px solid #ebebeb;
            text-align: center;
            line-height: 30px;
            font-size: 14px;
            cursor: pointer;
          }
          .list-wrap{
            font-size: 14px;
            margin-top: 15px;
            .list-head{
              background: #efefef;
              height:40px;
              padding-left:10px;
            }
            .list-body{
              ul{
                padding-left: 10px;
                height: 40px;
                &:nth-of-type(last){
                  border-bottom: 1px solid #ebebeb;
                }
              }
            }
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
