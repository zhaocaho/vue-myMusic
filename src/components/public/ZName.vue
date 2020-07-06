<template>
  <section class="z-name">
    <i
      :style="[
        { background: `url(${bgcurl}) 0% 0% / 0.3rem 0.3rem no-repeat` }
      ]"
    ></i>
    <span :style="nameStyle">{{ name }}</span>
    <router-link to="/login" tag="em" v-if="showLogin">
      立即登录
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'ZName',
  data() {
    return {}
  },
  props: {
    name: {
      type: String,
      default: '眼眸泪'
    },
    // 字体的样式
    nameStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    // 是否显示立即登录按钮
    showLogin: {
      type: Boolean,
      default: false
    },
    // 背景连接
    bgcurl: {
      // type: String,
      // 当在给数据设置绝对路径或者是相对路径时应该使用 require 引入才能成功
      // 我日你妈，背景图深坑。内联样式直接一次性写完，不然坑死人
      default: require('../../assets/img/logo.png')
    }
  }
}
</script>
<style lang="scss" scoped>
// $bgcUrl: '~@/assets/img/logo.png';
@import 'css/base.scss';
.z-name {
  @include list(row);
  justify-content: flex-start;
  width: 100%;
  height: 0.4rem;
  align-items: center;
  i {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    // background: url('~@/assets/img/logo.png') no-repeat;   这是可以的，加波浪
    // background: url('../../assets/img/logo.png') no-repeat;
    // @if 1 + 1 == 2 {
    //   background: url($bgcUrl) no-repeat;
    // }
    // @if 5 < 3 {
    //   background: url($bgcUrl);
    // }
    background-size: 0.3rem 0.3rem;
    overflow: hidden;
  }
  span {
    flex: 1;
    height: 0.4rem;
    line-height: 0.4rem;
    padding-left: 0.1rem;
  }
  em {
    font-size: 0.1rem;
    border: 1px solid white;
    border-radius: 1rem;
    padding-left: 0.05rem;
    padding-right: 0.05rem;
  }
}
</style>
