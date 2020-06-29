<template>
  <section :class="this.$style.sec">
    <div :class="[this.$style.nav, 'z-header']">
      <!-- 折叠标签 -->
      <span>
        <van-icon name="wap-nav" @click="toggleUserCenter" />
      </span>
      <div :style="{ color: color }">
        <router-link to="/home" tag="span">我的</router-link>
        <router-link to="/find" tag="span">发现</router-link>
        <router-link to="/cloud" tag="span">云村</router-link>
        <router-link to="/video" tag="span">视频</router-link>
        <!-- <span>我的</span>
      <span class="nav-active">发现</span>
      <span>云村</span>
      <span>视频</span> -->
      </div>
      <i>
        <van-icon name="search" @click="toggleSearch" />
      </i>
    </div>

    <!-- 用户中心弹出层 -->
    <van-popup
      v-model="userCenterVisible"
      position="left"
      :style="{ width: '80%', height: '100%' }"
      :overlay-style="{ width: '100%' }"
    >
      <user-center></user-center>
    </van-popup>
    <!-- 搜索弹出层 -->
    <van-popup
      v-model="searchVisible"
      position="bottom"
      :style="{ width: '100%', height: '100%' }"
      :overlay-style="{ width: '100%' }"
      duration=".5"
      closeable
      close-icon="arrow-left"
      close-icon-position="top-left"
    >
      <search></search>
    </van-popup>
  </section>
</template>

<script>
import UserCenter from '@/components/public/UserCenter/index.vue'
import Search from '@/components/public/Search/index.vue'
export default {
  name: 'ZHeader',
  components: {
    UserCenter,
    Search
  },
  data() {
    return {
      // 用户中心弹出层的显示与隐藏
      userCenterVisible: false,
      // 搜索弹出层的显示与隐藏
      searchVisible: false
    }
  },
  methods: {
    // 用户中心弹出层的显示与隐藏
    toggleUserCenter() {
      // console.log('ok')
      this.userCenterVisible = true
    },
    //
    toggleSearch() {
      this.searchVisible = true
    }
  },
  props: {
    color: {
      type: String,
      default: '#333333'
    }
  }
}
</script>

<style>
.nav-active {
  font-size: 0.2rem;
  font-weight: bold;
}
</style>

<style lang="scss" module>
@import 'css/base.scss';
.sec {
  .nav {
    position: fixed;
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    // font-size: 0.25rem;
    @include iconPos();
    background-color: transparent;
    @include list(row);
    justify-content: space-between;
    align-items: center;
    span {
      width: 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
    }
    div {
      @include list(row);
      width: 60%;
      justify-content: space-between;
      align-items: center;
      font-size: 0.16rem;
      // color: $color-em;
      span {
        // width: 0.3rem;
        // background-color: red;
        width: 40px;
      }
    }
    i {
      width: 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
    }
  }
}
</style>
