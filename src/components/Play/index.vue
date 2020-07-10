<template>
  <section class="paly_contain">
    <panel>
      <z-player v-if="false"></z-player>
      <play-title
        :name="musicData.name"
        :author="musicData.artists[0].name"
      ></play-title>
      <disk></disk>
      <media :src="playUrl"></media>
    </panel>
  </section>
</template>
<script>
import ZPlayer from '@/components/public/ZPlayer.vue'
import Panel from '@/base/Panel.vue'
import PlayTitle from './PlayTitle.vue'
import Disk from './Disk.vue'
import Media from './Media.vue'
export default {
  name: 'Play',
  components: {
    ZPlayer,
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
      if (this.$store.state.music.playUrl) {
        return this.$store.state.music.playUrl
      } else {
        return JSON.parse(window.localStorage.getItem('url'))
      }
    },
    // 音乐数据
    musicData() {
      if (this.$store.state.music.musicData) {
        return this.$store.state.music.musicData
      } else if (JSON.parse(window.localStorage.getItem('musicData'))) {
        return JSON.parse(window.localStorage.getItem('musicData'))
      } else {
        return {
          nama: '歌名',
          artists: [
            {
              name: '佚名'
            }
          ]
        }
      }
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
