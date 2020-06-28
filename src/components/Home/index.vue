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
  name: 'Home',
  components: {
    ZLogo,
    ZHeader
  },
  created() {
    // this.getData()
  },
  methods: {
    // getData() {
    //   console.log('1')
    //   this.$http
    //     .get('/captcha/sent', {
    //       params: { phone: 131888888888 }
    //     })
    //     .then(result => {
    //       console.log(result)
    //     })
    // }
  }
}
</script>

<style lang="scss" scoped></style>
