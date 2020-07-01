<template>
  <section :class="['loginContain', 'login']">
    <panel>
      <van-form @submit="submit">
        <van-field
          v-model="data.phone"
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
        <van-field
          v-model="data.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </panel>
  </section>
</template>
<script>
import { mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
import Panel from '@/base/Panel.vue'
export default {
  name: 'Login',
  components: {
    Panel
  },
  data() {
    return {
      data: {
        phone: '',
        password: ''
      }
    }
  },
  created() {},
  methods: {
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
      this.loginCellPhone(this.data)
      // this.$router.push('/home')
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.loginContain {
  color: red;
}
</style>
