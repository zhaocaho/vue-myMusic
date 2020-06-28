<template>
  <section :class="[this.$style.sear, 'search']">
    <panel>
      <!-- 搜索框 -->
      <div :class="this.$style.searchIpt">
        <input type="text" placeholder="请输入..." v-model="searchValue" />
        <i><van-icon name="friends-o"/></i>
      </div>
      <!-- 清除按钮 -->
      <van-icon
        name="close"
        class="searchClear"
        v-if="searchValue"
        @click="clearSearchValue"
      />
    </panel>
  </section>
</template>

<script>
import Panel from '@/base/Panel.vue'
export default {
  name: 'Search',
  components: {
    Panel
  },
  data() {
    return {
      // 搜索框的值
      searchValue: ''
    }
  },
  methods: {
    //   清楚搜索框数据
    clearSearchValue() {
      this.searchValue = ''
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
