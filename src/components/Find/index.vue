<template>
  <section class="find">
    <z-logo></z-logo>
    <z-header></z-header>
    <panel>
      <Swipe :css="{ height: '150px' }" :data="data"></Swipe>
    </panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import Panel from '@/base/Panel.vue'
import Swipe from '@/base/Swipe.vue'
export default {
  name: 'Find',
  components: {
    ZLogo,
    ZHeader,
    Panel,
    Swipe
  },
  data() {
    return {
      // banner数据
      data: []
    }
  },
  created() {
    // this.getData()
    this.getBanner()
  },
  methods: {
    getBanner() {
      this.$http.get('/banner', { params: { type: 1 } }).then(result => {
        if (result.status === 200) {
          this.data = result.data.banners
        } else {
          console.log('获取数据失败')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.find {
  .panel {
    margin-top: 0.5rem;
    .swipe {
      // background-color: red;
      height: 150px;
      border-radius: 0.05rem;
      overflow: hidden;
    }
  }
}
</style>
