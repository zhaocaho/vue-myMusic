<template>
  <section class="video_contain">
    <div class="video_logo">
      <z-logo></z-logo>
      <z-header></z-header>
      <z-player></z-player>
    </div>
    <panel>
      video
    </panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import ZPlayer from '@/components/public/ZPlayer.vue'
import Panel from '@/base/Panel.vue'
import { mapActions } from 'vuex'
export default {
  name: 'Video',
  components: {
    ZLogo,
    ZHeader,
    ZPlayer,
    Panel
  },
  created() {
    this.getData()
    // this.getData1()
    // this.getUrl(398599)
  },
  methods: {
    getData() {
      this.$http.get('/search/hot/detail').then(result => {
        console.log(result)
      })
    },
    getData1() {
      this.$http
        .get('/search', {
          params: { keywords: '海阔' }
        })
        .then(result => {
          console.log(result)
        })
    },
    ...mapActions({
      getUrl: 'SONG_URL'
    })
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
