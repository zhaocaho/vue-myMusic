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
            <button
              type="button"
              v-if="!isSendcaptcha"
              @click="sendCaptcha"
              :style="{ backgroundColor: '#b5b5b5' }"
            >
              发送验证码
            </button>
            <button
              type="button"
              v-else
              :disabled="sendCaptchaAain"
              :style="{ color: 'white', backgroundColor: '#b5b5b5' }"
            >
              重发({{ time }})
            </button>
          </span>
        </div>
        <van-button type="submit" color="#3faf7d" class="submitBtn" size="small"
          >注册</van-button
        >
      </van-form>
    </panel>
  </section>
</template>

<script>
import Panel from '@/base/Panel.vue'
import { mapState, mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
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
  created() {},
  methods: {
    // 发送验证码的异步函数
    ...mapActions({
      // 发送验证码
      captchaSend: types.CAPTCHA_SEND,
      // 验证验证码
      captchaVerify: types.CAPTCHA_VERIFY
      // 注册或修改密码
      // registerCellphone: types.REGISTER_CELLPHONE
    }),
    // 注册验证提交
    registerSubmit() {
      this.captchaVerify({
        phone: this.params.phone,
        captcha: this.params.captcha
      })
    },
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
      this.captchaSend({ phone: this.params.phone })
      const timer = setInterval(() => {
        this.time -= 1
        if (this.time === 0) {
          clearInterval(timer)
          this.toggleiIsSendcaptcha()
        }
      }, 1000)
      this.time = 60
    },
    // 返回
    backLogin() {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState(['isCaptchaRight'])
  },
  watch: {
    isCaptchaRight(newVal) {
      if (newVal) {
        this.$toast('恭喜你注册失败了！接口无法调用，请下载网易云音乐重新注册')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'css/base.scss';
.register {
  .van-form {
    position: relative;
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
        background-color: #b5b5b5;
        border-radius: 5px;
        text-align: center;
        overflow: hidden;
      }
    }
    .submitBtn {
      border-radius: 15px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 0.1rem;
      width: 0.8rem;
    }
  }
}
</style>
