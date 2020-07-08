<template>
  <section class="paly_contain">
    <panel>
      <play-title></play-title>
      <disk></disk>
      <media :src="playUrl"></media>
    </panel>
  </section>
</template>
<script>
import Panel from '@/base/Panel.vue'
import PlayTitle from './PlayTitle.vue'
import Disk from './Disk.vue'
import Media from './Media.vue'
export default {
  name: 'Play',
  components: {
    Panel,
    PlayTitle,
    Disk,
    Media
  },
  data() {
    return {}
  },
  created() {},
  computed: {
    // 音乐的名字，ID等数据
    musciData() {
      return this.$store.state.music.musicData
    },
    // 音乐的url
    playUrl() {
      return this.$store.state.music.playUrl
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.paly_contain {
  background-color: #1e1e1e;
  height: 100%;
}
</style>
