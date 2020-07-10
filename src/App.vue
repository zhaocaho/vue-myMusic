<template>
  <article id="app">
    <!-- 全局控制音乐播放器 -->
    <audio :src="playUrl" id="audio" :autoplay="musicPlay"></audio>
    <router-view></router-view>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  components: {
    // ZPlayer
  },
  created() {
    this.judgeSystem()
  },
  methods: {
    // 页面加载前获取设备型号
    ...mapMutations(['judgeSystem', 'getAudio'])
  },
  computed: {
    // 音乐的url
    playUrl() {
      if (this.$store.state.music.playUrl) {
        return this.$store.state.music.playUrl
      } else {
        return JSON.parse(window.localStorage.getItem('url'))
      }
    },
    // 音乐播放的状态
    musicPlay() {
      return this.$store.state.music.musicPlay
    }
  },
  mounted() {
    this.getAudio(document.getElementById('audio'))
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
