<template>
  <section class="paly_title">
    <div>
      <van-icon name="arrow-left" size=".25rem" @click="goBack" />
      <div>
        <p>{{ name }}</p>
        <span>{{ author }}></span>
      </div>
    </div>
    <span>
      分享
    </span>
  </section>
</template>
<script>
export default {
  name: 'PlayTitle',
  methods: {
    // 返回上一级
    goBack() {
      this.$router.go(-1)
    }
  },
  props: {
    name: {
      type: String,
      default: '歌曲'
    },
    author: {
      type: String,
      default: '佚名'
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'css/base.scss';
.paly_title {
  @include list(row);
  justify-content: space-between;
  align-items: center;
  color: white;
  div {
    @include list(row);
    justify-content: flex-start;
    align-items: center;
    div {
      @include list();
      align-items: flex-start;
      margin-left: 0.1rem;
      span {
        font-size: 0.1rem;
        color: #6e6e6e;
      }
    }
  }
}
</style>
