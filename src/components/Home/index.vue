<template>
  <section class="home">
    <z-logo :color="'white'"></z-logo>
    <z-header color="white"></z-header>
    <panel></panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import Panel from '@/base/Panel.vue'
export default {
  name: 'Home',
  components: {
    ZLogo,
    ZHeader,
    Panel
  },
  data() {
    return {}
  },
  created() {
    // this.getData()
  },
  mounted() {
    // this.$refs.child.vertical = true
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #1e1e1e;
  .panel {
    margin-top: 0.5rem;
  }
}
</style>
