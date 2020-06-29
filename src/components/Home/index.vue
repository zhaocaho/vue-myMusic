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
// import { mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
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
    this.bannerList(1)
  },
  mounted() {
    // this.$refs.child.vertical = true
  },
  methods: {
    // ...mapActions('find', {
    //   bannerList: types.BANNER_LISTS
    // })
    bannerList(n) {
      this.$store.dispatch(`find/${types.BANNER_LISTS}`, n)
    }
  },
  computed: {}
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
