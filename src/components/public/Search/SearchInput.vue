<template>
  <section :class="[this.$style.sear, 'search']">
    <!-- <panel> -->
    <!-- 搜索框 -->
    <div :class="this.$style.searchIpt">
      <input
        type="text"
        placeholder="请输入..."
        v-model="params.keywords"
        @input="inputChange"
        v-focus
        @keyup.enter="searchAndBlur(params)"
        ref="searchInput"
        @blur="searchBlur"
        @focus="searchFocus"
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

    <!-- 搜索建议弹出框 -->
    <div class="search_suggest" v-show="searchSuggestDialogVisible">
      <p class="first" @click="searchAndBlur(params)">
        搜索"{{ params.keywords }}"
      </p>
      <p
        v-for="(item, i) in searchSuggestList"
        :key="i"
        @click.stop="searchAndBlur({ keywords: item.keyword })"
      >
        {{ item.keyword }}
      </p>
    </div>
    <!-- </panel> -->
  </section>
</template>

<script>
// import Panel from '@/base/Panel.vue'
import { mapMutations, mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
export default {
  name: 'Search',
  components: {},
  data() {
    return {
      params: {
        // 搜索框的值
        keywords: ''
      },
      // 防抖函数的计时器
      timer: null,
      // 历史记录
      historyList: [],
      // 搜索建议的显示与隐藏
      searchSuggestDialogVisible: false
    }
  },
  created() {
    this.getHistoryList()
  },
  methods: {
    ...mapActions({
      search: types.SEARCH,
      getMUsicUrl: types.SONG_URL,
      getSearchSuggest: types.SEARCH_SUGGEST
    }),
    ...mapMutations({
      getMUsicData: 'getMUsicData',
      setSuggestList: types.SEARCH_SUGGEST,
      //   changeIsSearch: 'changeIsSearch'
      changeSearchState: 'changeSearchState'
    }),
    //   清楚搜索框数据
    clearSearchValue() {
      this.params.keywords = ''
      this.searchSuggestDialogVisible = false
      // 当输入框隐藏后，就将搜索建议数据情况
      this.setSuggestList([])
      this.$store.commit(types.SEARCH, [])
      this.changeSearchState(false)
    },
    // 在输入框值的改变添加防抖函数
    debounceChange() {
      if (this.timer !== null) {
        window.clearTimeout(this.timer)
      }
      this.timer = window.setTimeout(() => {
        if (this.params.keywords.length) {
          // this.search(this.params)
          this.getSearchSuggest(this.params)
          if (!this.searchState) {
            this.searchSuggestDialogVisible = true
          }
        } else {
          this.searchSuggestDialogVisible = false
        }
      }, 1000)
    },
    // 搜索框输入值发生改变后，进行搜索建议请求
    inputChange() {
      if (!this.params.keywords.length) {
        this.searchSuggestDialogVisible = false
        // 当输入框隐藏后，就将搜索建议数据情况
        this.setSuggestList([])
      }
      this.debounceChange()
    },

    // 获取历史保存记录
    getHistoryList() {
      this.historyList =
        JSON.parse(window.localStorage.getItem('historyList')) || []
    },
    // 保存历史记录
    storage() {
      // const a = [1, 2, 3]
      // const b = JSON.stringify(a)
      // const c = JSON.parse(window.localStorage.getItem('ceshi'))
      // window.localStorage.setItem('ceshi', b)
      // console.log(c)
      this.historyList.push(this.params.keywords)
      if (this.historyList.length > 10) {
        this.historyList.shift()
      }
      const history = JSON.stringify(this.historyList)
      window.localStorage.setItem('historyList', history)
    },
    // 取消聚焦且进行收索
    searchAndBlur(n) {
      if (this.params.keywords) {
        this.search(n)
        this.changeSearchState(true)
      }
      this.$refs.searchInput.blur()
      this.storage()
      this.searchSuggestDialogVisible = false
      //   this.changeIsSearch()
    },
    // 输入框失去焦点后触发
    searchBlur() {
      //   this.searchSuggestDialogVisible = false
    },
    // 输入框获取焦点
    searchFocus() {
      if (this.params.keywords.length) {
        this.searchSuggestDialogVisible = true
      }
    }
  },
  computed: {
    // 搜索的数据，包括hasMore(Boolean),songCount(总数),songs(歌曲列表)
    searchData() {
      return this.$store.state.music.searchData
    },
    // 搜索列表
    searchList() {
      return this.$store.state.music.searchList
    },
    // 搜索建议列表
    searchSuggestList() {
      return this.$store.state.music.searchSuggestList
    },
    // // 是否已经搜索
    // isSearch() {
    //   return this.$store.state.music.isSearch
    // }
    searchState() {
      return this.$store.state.music.searchState
    }
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
.searchClear {
  color: #858585;
  position: absolute;
  font-size: 0.2rem;
  top: 0.15rem;
  right: 0.5rem;
}
.search_suggest {
  position: absolute;
  width: 70%;
  top: 0.45rem;
  left: 0.4rem;
  box-shadow: 0 0 5px #222222;
  font-size: 0.14rem;
  z-index: 99;
  .first {
    color: #5686db;
  }
  p {
    height: 0.3rem;
    line-height: 0.3rem;
    padding-left: 0.1rem;
    border-bottom: 1px solid #d9d9d9;
    background-color: #ffffff;
  }
}
</style>

<style lang="scss" module>
.sear {
  font-size: 0.16rem;
  .searchIpt {
    display: flex;
    input {
      border-bottom: 1px solid #222222;
      margin-left: 0.32rem;
      margin-right: 0.1rem;
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
