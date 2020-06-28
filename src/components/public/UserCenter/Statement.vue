<template>
  <section :class="[this.$style.state, 'statement']">
    我是声明
  </section>
</template>

<script>
export default {
  name: 'Statement'
}
</script>

<style lang="scss" module>
.state {
  color: red;
}
</style>
