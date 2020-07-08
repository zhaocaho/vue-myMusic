<template>
  <section class="play_media">
    <audio :src="src" id="audio"></audio>
    <button @click="playMusic">播放</button>
  </section>
</template>
<script>
export default {
  name: 'Media',
  methods: {
    playMusic() {
      const audio = document.getElementById('audio')
      audio.play()
    }
  },
  props: ['src']
}
</script>

<style lang="scss" scoped>
.play_media {
  color: white;
}
</style>
