<template>
  <section :class="[this.$style.userCenter, 'user-center']">
    <panel>
      <statement></statement>
      我是用户中心
    </panel>
  </section>
</template>

<script>
import Panel from '@/base/Panel.vue'
import Statement from './Statement.vue'
export default {
  name: 'UserCenter',
  data() {
    return {}
  },
  components: {
    Panel,
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
