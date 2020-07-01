<template>
  <section :class="[this.$style.userCenter, 'user-center']">
    <panel>
      <statement></statement>
      <user></user>
      <shop></shop>
    </panel>
  </section>
</template>

<script>
import Panel from '@/base/Panel.vue'
import Statement from './Statement.vue'
import User from './User.vue'
import Shop from './Shop.vue'
export default {
  name: 'UserCenter',
  data() {
    return {}
  },
  components: {
    Panel,
    Statement,
    User,
    Shop
  }
}
</script>

<style lang="scss" module>
.userCenter {
  font-size: 0.16rem;
}
</style>
