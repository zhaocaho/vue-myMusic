<template>
  <section class="z-player" @click="goPlay">
    <van-icon name="music-o" size=".4rem" />
    <div class="paly">
      <van-icon
        name="play-circle-o"
        size=".4rem"
        @click.stop="play"
        v-if="!musicPlay"
      />
      <van-icon name="pause-circle-o" size=".4rem" @click.stop="pause" v-else />
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ZPlayer',
  methods: {
    ...mapMutations(['changeMusicPlay']),
    // 去到播放页面
    goPlay() {
      this.$router.push('/play')
    },
    // 播放
    play() {
      this.audio.play()
      this.changeMusicPlay(true)
    },
    // 暂停
    pause() {
      this.audio.pause()
      this.changeMusicPlay(false)
    }
  },
  computed: {
    ...mapState(['audio']),
    // 音乐播放的状态
    musicPlay() {
      return this.$store.state.music.musicPlay
    }
    // // 音乐的url
    // playUrl() {
    //   if (this.$store.state.music.playUrl) {
    //     return this.$store.state.music.playUrl
    //   } else {
    //     return JSON.parse(window.localStorage.getItem('url'))
    //   }
    // }
  }
}
</script>
<style lang="scss" scoped>
@import 'css/base.scss';
.z-player {
  @include list(row);
  justify-content: space-between;
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0 1px 1px black;
  padding: 0.05rem 0.1rem;
}
</style>
