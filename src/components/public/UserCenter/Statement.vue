<template>
  <section :class="[this.$style.state, 'statement']">
    广告
  </section>
</template>

<script>
export default {
  name: 'Statement',
  components: {}
}
</script>

<style lang="scss" module>
.state {
  color: red;
}
</style>
