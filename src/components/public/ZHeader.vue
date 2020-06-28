<template>
  <section :class="[this.$style.sec, 'z-header']">
    <!-- 折叠标签 -->
    <span>
      <van-icon name="wap-nav" />
    </span>
    <div>
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
      <van-icon name="search" />
    </i>
  </section>
</template>

<script>
export default {
  name: 'ZHeader'
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
    span {
      // width: 0.3rem;
      // background-color: red;
      width: 40px;
      color: $color-em;
    }
  }
  i {
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
  }
}
</style>
