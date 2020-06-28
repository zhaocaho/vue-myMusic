<template>
  <section :class="[this.$style.pan, 'panel']">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style lang="scss" module>
.pan {
  width: 100%;
  height: 100%;
  padding: 10px;
  font-size: 0.16rem;
  box-sizing: border-box;
}
</style>
