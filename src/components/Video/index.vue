<template>
  <section>
    <z-logo></z-logo>
    <z-header></z-header>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
export default {
  name: 'video',
  components: {
    ZLogo,
    ZHeader
  }
}
</script>

<style lang="scss" module></style>
