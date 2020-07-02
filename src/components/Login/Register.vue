<template>
  <section class="register">
    <panel>
      <!-- 返回 -->
      <van-icon
        name="arrow-left"
        @click="backLogin"
        size=".3rem"
        color="#b9b9b9"
      />
      <!-- 注册所用数据 -->
      <van-form @submit="registerSubmit">
        <!-- 用户名 -->
        <van-field
          v-model="params.nickname"
          clearable
          name="用户名"
          label="用户名"
          placeholder="用户名"
        />
        <!-- 手机 -->
        <van-field
          v-model="params.phone"
          clearable
          name="电话号码"
          label="电话号码"
          placeholder="电话号码"
          :rules="[
            {
              required: true,
              message: '请填写正确的电话号码',
              validator: phoneValidator
            }
          ]"
        />
        <!-- 密码 -->
        <van-field
          v-model="params.password"
          type="password"
          clearable
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <!-- 验证码captcha -->
        <div class="captcha">
          <van-field
            v-model="params.captcha"
            clearable
            name="验证码"
            label="验证码"
            placeholder="验证码"
          />
          <span>
            <button type="button" v-if="!isSendcaptcha" @click="sendCaptcha">
              发送验证码
            </button>
            <button type="button" v-else :disabled="sendCaptchaAain">
              重发({{ time }})
            </button>
          </span>
        </div>
        <button type="submit">注册</button>
      </van-form>
    </panel>
  </section>
</template>

<script>
import Panel from '@/base/Panel.vue'
export default {
  name: 'Register',
  components: {
    Panel
  },
  data() {
    return {
      //   注册所需参数
      params: {
        //   验证码
        captcha: '',
        phone: '',
        password: '',
        // 昵称
        nickname: ''
      },
      //   倒计时
      time: 60,
      //   已经发送了验证码
      isSendcaptcha: false,
      //   是否能再次发送验证码
      sendCaptchaAain: true
    }
  },
  methods: {
    registerSubmit() {},
    // 手机校验
    phoneValidator(val) {
      const phoneReg = /^1[3456789]\d{9}$/
      return phoneReg.test(val)
    },
    // 发送验证码后切换
    toggleiIsSendcaptcha() {
      this.isSendcaptcha = !this.isSendcaptcha
    },
    // 发送验证码
    sendCaptcha() {
      this.toggleiIsSendcaptcha()
      const timer = setInterval(() => {
        this.time -= 1
        if (this.time === 0) {
          clearInterval(timer)
          this.toggleiIsSendcaptcha()
        }
      }, 1000)
    },
    // 返回
    backLogin() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'css/base.scss';
.register {
}
.captcha {
  @include list(row);
  align-items: center;
  .van-field {
    flex: 1;
  }
  span {
    font-size: 0.1rem;
    width: 0.6rem;
    height: 0.2rem;
    line-height: 0.2rem;
    background-color: #e6e6e6;
    border-radius: 5px;
    text-align: center;
    overflow: hidden;
  }
}
</style>
