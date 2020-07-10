<template>
  <section class="search-list">
    <p v-for="(item, i) in searchList" :key="item.id" @click="goPlay(item)">
      {{ i }} {{ item.name }}
    </p>
  </section>
</template>
<script>
import { mapMutations } from 'vuex'
import * as types from 'store/mutation-types.js'
export default {
  name: 'SearchList',
  methods: {
    // ...mapActions({
    //   getMUsicUrl: types.SONG_URL
    // }),
    ...mapMutations({
      getMUsicData: 'getMUsicData',
      getMUsicUrl: types.SONG_URL,
      changeMusicPlay: 'changeMusicPlay'
    }),
    // 跳转到播放页面
    goPlay(item) {
      console.log(item)
      this.getMUsicData(item)
      this.getMUsicUrl(item.id)
      this.$router.push('/play')
      this.changeMusicPlay(true)
    }
  },
  computed: {
    // 搜索列表
    searchList() {
      return this.$store.state.music.searchList
    }
  }
}
</script>
<style lang="scss" scoped>
.search-list {
  margin-top: 0.1rem;
  p {
    height: 0.3rem;
    line-height: 0.3rem;
    padding-left: 0.1rem;
    border-bottom: 1px solid #d9d9d9;
  }
}
</style>
