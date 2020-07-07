<template>
  <section class="paly_title">
    <div>
      <van-icon name="arrow-left" size=".25rem" />
      <div>
        <p>无期</p>
        <span>光头华夏></span>
      </div>
    </div>
    <span>
      分享
    </span>
  </section>
</template>
<script>
export default {
  name: 'PlayTitle'
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
      p {
      }
      span {
        font-size: 0.1rem;
        color: #6e6e6e;
      }
    }
  }
}
</style>
