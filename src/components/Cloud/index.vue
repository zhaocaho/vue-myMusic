<template>
  <section class="cloud_contain">
    <div class="cloud_logo">
      <z-logo></z-logo>
      <z-header></z-header>
    </div>
    <panel>cloud</panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import Panel from '@/base/Panel.vue'
export default {
  name: 'Cloud',
  components: {
    ZLogo,
    ZHeader,
    Panel
  }
}
</script>

<style lang="scss" scoped>
.cloud_contain {
  .cloud_logo {
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    background-color: white;
  }
  .panel {
    margin-top: 1rem;
  }
}
</style>
