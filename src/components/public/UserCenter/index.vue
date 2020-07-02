<template>
  <section :class="[this.$style.userCenter, 'user-center']">
    <panel>
      <statement></statement>
      <user></user>
      <shop></shop>
      <setting></setting>
    </panel>
  </section>
</template>

<script>
import Panel from '@/base/Panel.vue'
import Statement from './Statement.vue'
import User from './User.vue'
import Shop from './Shop.vue'
import Setting from './Setting.vue'
export default {
  name: 'UserCenter',
  data() {
    return {}
  },
  components: {
    Panel,
    Statement,
    User,
    Shop,
    Setting
  }
}
</script>

<style lang="scss" module>
.userCenter {
  font-size: 0.16rem;
}
</style>
