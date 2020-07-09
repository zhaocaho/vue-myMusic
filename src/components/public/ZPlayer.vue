<template>
  <section class="z-player" @click="goPlay">
    <button @click.stop="playMusic">播放</button>
    <audio
      src="http://m8.music.126.net/20200708145406/d95a71d393bad533392a90d22ad0de01/ymusic/e23b/4394/b8d6/41653f743c00064d4f40c90875e1ebb8.mp3"
      id="audio"
    ></audio>
  </section>
</template>
<script>
export default {
  name: 'ZPlayer',
  methods: {
    playMusic() {
      const audio = document.getElementById('audio')
      audio.play()
    },
    // 去到播放页面
    goPlay() {
      this.$router.push('/play')
    }
  }
}
</script>
<style lang="scss" scoped>
.z-player {
  width: 100%;
  height: 0.4rem;
  border: 1px solid red;
  position: fixed;
  bottom: 0;
  font-size: 16px;
  box-sizing: border-box;
}
</style>
