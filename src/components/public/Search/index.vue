<template>
  <section :class="[this.$style.sear, 'search']">
    <panel>
      <!-- 搜索框 -->
      <div :class="this.$style.searchIpt">
        <input
          type="text"
          placeholder="请输入..."
          v-model="params.keywords"
          @input="debounceChange"
        />
        <i><van-icon name="friends-o"/></i>
      </div>
      <!-- 清除按钮 -->
      <van-icon
        name="close"
        class="searchClear"
        v-if="params.keywords"
        @click="clearSearchValue"
      />
      <p v-for="item in searchList" :key="item.id" @click="goPlay(item)">
        {{ item.name }}
      </p>
    </panel>
  </section>
</template>

<script>
import Panel from '@/base/Panel.vue'
import { mapMutations, mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
export default {
  name: 'Search',
  components: {
    Panel
  },
  data() {
    return {
      params: {
        // 搜索框的值
        keywords: ''
      },
      //
      timer: null
    }
  },
  methods: {
    ...mapActions({
      search: types.SEARCH,
      getMUsicUrl: types.SONG_URL
    }),
    ...mapMutations({
      getMUsicData: 'getMUsicData'
    }),
    //   清楚搜索框数据
    clearSearchValue() {
      this.params.keywords = ''
    },
    // 在输入框值的改变添加防抖函数
    debounceChange() {
      if (this.timer !== null) {
        window.clearTimeout(this.timer)
      }
      this.timer = window.setTimeout(() => {
        if (this.params.keywords.length) {
          this.search(this.params)
        }
      }, 1000)
    },
    // 跳转到播放页面
    goPlay(item) {
      console.log(item)
      this.getMUsicData(item)
      this.getMUsicUrl(item.id)
      this.$router.push('/play')
    }
  },
  computed: {
    searchData() {
      return this.$store.state.music.searchData
    },
    searchList() {
      return this.$store.state.music.searchList
    }
  }
}
</script>
<style scoped>
.searchClear {
  color: #858585;
  position: absolute;
  font-size: 0.2rem;
  top: 0.15rem;
  right: 0.5rem;
}
</style>

<style lang="scss" module>
.sear {
  font-size: 0.16rem;
  .searchIpt {
    display: flex;
    input {
      border-bottom: 1px solid #222222;
      margin-left: 32px;
      margin-right: 10px;
      height: 0.3rem;
      flex: 1;
      box-sizing: border-box;
    }
    i {
      width: 0.3rem;
      height: 0.3rem;
      line-height: 0.3rem;
      font-size: 0.25rem;
      text-align: center;
    }
  }
}
</style>
