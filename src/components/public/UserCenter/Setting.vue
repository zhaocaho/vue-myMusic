<template>
  <section class="setting">
    设置
    <van-button @click="logout" type="info">退出 </van-button>
  </section>
</template>

<script>
import * as types from 'store/mutation-types.js'
import { mapActions } from 'vuex'
export default {
  name: 'Setting',
  methods: {
    ...mapActions({
      logout: types.LOGOUT
    })
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.setting {
  color: blue;
}
</style>
