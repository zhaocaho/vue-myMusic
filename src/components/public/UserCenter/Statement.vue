<template>
  <section :class="[this.$style.state, 'statement']">
    做一个自己的音乐播放器
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
