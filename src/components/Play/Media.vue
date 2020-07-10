<template>
  <section class="play_media">
    <!-- <audio :src="src" id="audio" autoplay></audio> -->
    <van-icon
      name="play-circle-o"
      size=".4rem"
      @click="play"
      v-if="!musicPlay"
    />
    <van-icon name="pause-circle-o" size=".4rem" @click.stop="pause" v-else />
  </section>
</template>
<script>
// import music from '@/assets/js/musicControl.js'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Media',
  methods: {
    ...mapMutations(['changeMusicPlay']),
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
  props: ['src'],
  computed: {
    ...mapState(['audio']),
    // 音乐播放的状态
    musicPlay() {
      return this.$store.state.music.musicPlay
    }
  }
}
</script>

<style lang="scss" scoped>
.play_media {
  color: white;
}
</style>
