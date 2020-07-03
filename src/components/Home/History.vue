<template>
  <section class="history" v-if="showHistory">
    <span> 等级:{{ data.level }}</span>
    <span>注册时间:{{ data.createTime | dataFormat }}</span>
  </section>
</template>

<script>
export default {
  name: 'History',
  props: {
    //   数据
    data: {
      type: Object,
      default() {
        return {
          level: '',
          createTime: ''
        }
      }
    },
    // 未登录时不显示
    showHistory: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import 'css/base.scss';
.history {
  @include list(row);
  justify-content: space-between;
  color: white;
  font-size: 0.1rem;
}
</style>
