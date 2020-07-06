<template>
  <section class="video_contain">
    <div class="video_logo">
      <z-logo></z-logo>
      <z-header></z-header>
    </div>
    <panel>
      video
    </panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import Panel from '@/base/Panel.vue'
export default {
  name: 'Video',
  components: {
    ZLogo,
    ZHeader,
    Panel
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      console.log('1')
      this.$http
        .get('/user/record', { params: { uid: 1428569889 } })
        .then(result => {
          console.log(result)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.video_contain {
  .video_logo {
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
