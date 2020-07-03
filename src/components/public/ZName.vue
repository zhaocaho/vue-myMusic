<template>
  <section class="z-name">
    <i></i>
    <span :style="nameStyle">{{ name }}</span>
    <router-link to="/login" tag="em" v-if="showLogin">
      立即登录
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'ZName',
  props: {
    name: {
      type: String,
      default: '登录更多欢乐'
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
    }
  }
}
</script>
<style lang="scss" scoped>
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
    background-color: red;
    border-radius: 50%;
    background: url('../../assets/img/logo.png') no-repeat;
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
