<template>
  <section class="login">
    <panel>
      <!-- 电话登录 -->
      <!-- <phone></phone> -->
      <i class="longin_logo"></i>
      <div class="loginSelect">
        <van-button
          size="small"
          type="default"
          class="phoneLogin btnCommon"
          to="/login/cellphone"
          >电话登录</van-button
        >
        <van-button size="small" type="default" class="mailLogin btnCommon"
          >邮箱登录</van-button
        >
        <van-button
          size="small"
          type="default"
          class="register btnCommon"
          to="/register/cellphone"
          >注册</van-button
        >
        <van-button
          size="small"
          type="default"
          class="visitor btnCommon"
          to="/home"
          >游客登录</van-button
        >
      </div>
    </panel>
  </section>
</template>

<script>
// import Phone from './Phone.vue'
import Panel from '@/base/Panel.vue'
export default {
  name: 'Login',
  components: {
    // Phone,
    Panel
  }
}
</script>
<style lang="scss" scoped>
@import 'css/base.scss';
.login {
  height: 100%;
  background-color: #e21918;
  .longin_logo {
    position: absolute;
    display: block;
    width: 0.3rem;
    height: 0.3rem;
    background-color: red;
    border-radius: 50%;
    background: url('../../assets/img/logo.png') no-repeat;
    background-size: 0.3rem 0.3rem;
    overflow: hidden;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .loginSelect {
    position: relative;
    top: 50%;
    @include list();
    align-items: center;
    .btnCommon {
      //   position: absolute;
      //   left: 50%;
      //   transform: translateX(-50%);
      border-radius: 20px;
      width: 1.8rem;
      border: none;
      margin-top: 0.1rem;
    }
    .phoneLogin {
      color: #e21918;
    }
    .mailLogin {
      background-color: #0288d1;
    }
    .register {
      background-color: #3faf7d;
    }
    .visitor {
      background-color: #ffca28;
    }
  }
}
</style>
