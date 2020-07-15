<template>
    <div class="outer_label">
      <img class="login-icon" src="../../assets/logo.png">
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
      <br>
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
      <br>
      <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
      <el-button class="login_btn" @click.native="login" type="primary" :loading="isBtnLoading">登录</el-button>
      <div style="margin-right:10px;margin-left:10px;margin-top: 5px">
        <span style="color: #afafaf;" @click>账号注册</span><span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
      <el-button class="login_btn" @click="createnewproject" type="primary" >查询</el-button>
    </div>
    </div>
</template>



<script>
   import FindUser from '../finduser/FindUser';

  export default {
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }
      },
      createnewproject() {
         this.$router.push({name: 'FindUser'}).catch();
        err => {
          console.log('输出报错',err)
      }

    }
  }
</script>
<style>
  .login_form {
    padding-top: 0%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .login-icon{
    position: relative;
    height: 50%;
  }
  .qxs-ic_user {
    background: url("../../assets/login/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background: url("../../assets/login/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .login_btn {
    height: 30px;
    width: 30%;
    font-size: 5px;
    color: #ffffff;
    line-height: 5px;
    border:0px;
    /*background: -webkit-linear-gradient(left, #bacafc, #bacafc); !* Safari 5.1 - 6.0 *!*/
    /*background: -o-linear-gradient(right, #bacafc, #bacafc); !* Opera 11.1 - 12.0 *!*/
    /*background: -moz-linear-gradient(right, #bacafc, #bacafc); !* Firefox 3.6 - 15 *!*/
    /*background: linear-gradient(to right, #bacafc , #bacafc); !* 标准的语法 *!*/
    background: #5eac85;

  }
</style>
