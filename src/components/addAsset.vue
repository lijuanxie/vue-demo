<template>
  <div class="modal-bg">
    <div class="modal">
      <div class="modal-head">
          <h5>增加设备</h5>
          <span class="modal-close pointer" v-on:click="close">关闭</span>
      </div>
      <div class="modal-body">
        <div class="sys-flex">
          <div class="list-item mr20">
            <label>设备名称：</label>
            <input class="wd200 mt0" placeholder="设备名称" v-model="form.info.title">
          </div>
          <div class="list-item">
            <label>设备类别：</label>
            <select class="wd200" v-model="form.info.category_id">
              <option v-bind:value="-1">
                全部类别
              </option>
              <option v-bind:value="item.id" v-for="item in sortList">{{item.title}}</option>
            </select>
          </div>
        </div>
        <div class="list-item">
          <label>设备条码：</label>
          <input class="wd200" placeholder="设备条码" v-model="form.info.bar_code">
        </div>

      </div>
      <div class="modal-footer">
        <span class="cancel-btn btn mr20" v-on:click="close">取消</span>
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
        sortList : [],
        info : this.form.info
      }
    },

    methods: {
      close(){
        this.$emit('closeModal', false)
      },
      getSort(){
        console.log(this.form, 999);
        let params = {

        },
        url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/categoryList?access_token=dev4e83f9b8f5039b98213f76f2e60c1c4';
        this.$http.jsonp(url, {}, {method : 'POST'}).then((data)=>{
          if( data && data.body.code == 200 ){
            this.sortList = data.body.data;
          }else{
            alert('请求出错');
          }
        })
      },

      submit(){

        if( !this.form.info.title || !this.form.info.bar_code || !this.form.info.category_id ){
          alert('请填写名称、条码、分类');
          return;
        }
        let url ='';
        this.asset_id = this.form.info.id ? this.form.info.id : '';
        if( this.asset_id ){
          url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/assetUpdate?access_token=dev4e83f9b8f5039b98213f76f2e60c1c4';
        }else{
          url = 'http://sys-team.cloud.hoge.cn/dev/sys/asset/assetCreate?access_token=dev4e83f9b8f5039b98213f76f2e60c1c4';
        }

        this.$http.jsonp(url, {params : {category_id : this.form.info.category_id,title : this.form.info.title,id: this.asset_id}}, {method : 'POST'}).then((data)=>{
          if( data.body.code != 200 ){
            alert(data.body.msg);
          }else{
            alert( data.body.msg);
            this.close();
          }
        })
      }
    },
    created(){
      this.getSort();
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
