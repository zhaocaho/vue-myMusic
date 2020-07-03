<template>
  <section class="phone">
    <panel>
      <van-icon
        name="arrow-left"
        @click="backLogin"
        size=".3rem"
        color="#b9b9b9"
      />
      <van-form @submit="submit">
        <!-- 手机 -->
        <van-field
          v-model="data.phone"
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
          v-model="data.password"
          type="password"
          clearable
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <!-- 提交 -->
        <div style="margin: 16px;" class="submitBtn">
          <router-link
            to="/register/cellphone"
            class="forgetPassword"
            tag="div"
          >
            忘记密码？
          </router-link>
          <van-button
            size="small"
            round
            block
            native-type="submit"
            color="#2ea0db"
            :style="{ width: '.8rem', float: 'right' }"
          >
            <van-loading type="spinner" v-if="isLoading" />
            <span v-else class="btn">登录</span>
          </van-button>
        </div>
      </van-form>
    </panel>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
import Panel from '@/base/Panel.vue'
export default {
  name: 'Phone',
  components: {
    Panel
  },
  data() {
    return {
      // 登录的账号密码
      data: {
        phone: 15682078775,
        password: 'Zc931103'
      }
      // loading
      // isLoading: false
    }
  },
  created() {},
  methods: {
    ...mapMutations(['loginIng']),
    ...mapActions({
      loginCellPhone: types.LOGIN_CELLPHONE
    }),
    // 手机校验
    phoneValidator(val) {
      const phoneReg = /^1[3456789]\d{9}$/
      return phoneReg.test(val)
    },
    // 验证通过后登录并切换页面
    submit() {
      // this.isLoading = true
      this.loginIng()
      this.loginCellPhone(this.data)
      // 这里是异步的，不能及时反馈，要用watch
      // if (this.isLogin) {
      //   this.$router.push('/home')
      // }
    },
    // 返回登录选择页面
    backLogin() {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState(['isLogin', 'isLoading'])
  },
  watch: {
    // 判断是否登录成功，跳转到下一页
    isLogin(newVal, oldVal) {
      if (newVal) {
        this.$router.push('/home')
      }
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.phone {
  height: 100%;
  background-color: #e21918;
  .panel {
    position: relative;
    .van-form {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      border-radius: 15px;
      overflow: hidden;
      width: 80%;
      .van-field {
        border-radius: 15px;
        margin-bottom: 0.1rem;
      }
      .submitBtn {
        position: relative;
        .forgetPassword {
          position: absolute;
          top: 0.02rem;
          color: #d1d1d1;
        }
        .van-button {
          .btn {
            color: white;
          }
        }
      }
    }
  }
}
</style>
