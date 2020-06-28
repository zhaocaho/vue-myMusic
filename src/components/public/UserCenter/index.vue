<template>
  <section :class="[this.$style.userCenter, 'user-center']">
    <statement></statement>
    我是用户中心
  </section>
</template>

<script>
import Statement from './Statement.vue'
export default {
  name: 'UserCenter',
  data() {
    return {}
  },
  components: {
    Statement
  }
}
</script>

<style lang="scss" module>
.userCenter {
  color: red;
  font-size: 0.16rem;
}
</style>
