<template>
  <div class="login-wrap">
    <div class="login-form">
      <img v-if="hideLoginForm" src="../../../../src/assets/logo-login.png" alt="">
      <div v-else>
        <div class="titleForgot">
          <p class="headForgot">LẤY LẠI MẬT KHẨU</p>
          <p class="contentForgot">
            Bạn vui lòng nhập email đăng nhập vào ô bên dưới để nhận email hướng dẫn lấy lại mật khẩu.
          </p>
        </div>
      </div>
      <div class="form-wrap">
        <div class="email-wrap">
          <input type="text" placeholder=" Email" v-model="email">
          <span class="error">{{errorEmail}}</span>
        </div>
        <div v-if="hideLoginForm" class="password-wrap">
          <input type="password" placeholder=" Mật khẩu" v-model="password">
          <span class="error">{{errorPassword}}</span>
          <div class="forgot-pass">
            <button v-if="hideLoginForm" @click="hideForm()">Quên mật khẩu ?</button>
          </div>
        </div>
        <el-button v-if="hideLoginForm" class="login" @click="loginDs()" type="primary">ĐĂNG NHẬP</el-button>
        <el-button v-else class="login" @click="successForgotPassword()" type="primary">GỬI EMAIL</el-button>
        <div class="btnConfirm">
          <button v-if="!hideLoginForm" @click="loginForm()">Trở về trang đăng nhập</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      email:'',
      password:'',
      errorEmail:'',
      errorPassword :'',
      hideLoginForm : true
    }
  },
  methods:{
    loginDs(){
      let check = true
      if (this.email === ''){
        this.errorEmail = "Email không được để trống"
        check = false
      }else if (!this.validateEmail(this.email)){
        check = false
        this.errorEmail = "Email sai định dạng, vui lòng nhập lại"
      }
      if (this.password === ''){
        check = false
        this.errorPassword = "Mật khẩu không được để trống"
      }else if(this.password.length < 6){
        check = false
        this.errorPassword = "Mật khẩu phải có độ dài lớn hơn 6 ký tự"
      }
      if(check){
        this.$router.push({ path: `/`})
      }
    },
    validateEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    hideForm(){
      this.hideLoginForm = false
      this.errorEmail = ''
    },
    loginForm(){
      this.hideLoginForm = true
      this.errorEmail = ''
      this.errorPassword = ''
    },
    successForgotPassword(){
      if (this.email === ''){
        this.errorEmail = "Email không được để trống"
      }else if (!this.validateEmail(this.email)){
        this.errorEmail = "Email sai định dạng, vui lòng nhập lại"
      }else{
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        });
        this.hideLoginForm = true
        this.email = ''
      }
    }
  },
  watch:{
    email(value){
      if (value.length>0){
        this.errorEmail = ''
      }
    },
    password(value){
      if (value.length>0){
        this.errorPassword = ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/homeworks/Unit05/Login";
</style>