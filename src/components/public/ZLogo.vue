<template>
  <section :class="[this.$style.sec, 'z-logo']">
    <i></i>
    <span>HenryMusic</span>
  </section>
</template>

<script>
export default {
  name: 'ZLogo'
}
</script>

<style lang="scss" module>
@import 'css/base.scss';
.sec {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
  @include list(row);
  align-items: center;
  justify-content: center;
  i {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background: url('../../assets/img/logo.png') no-repeat;
    background-size: 0.3rem 0.3rem;
  }
  span {
    font-size: 0.3rem;
    font-family: cursive;
    text-shadow: 6px 2px 2px #999999;
    color: #333;
    font-weight: bold;
    // overflow: hidden;
  }
}
</style>
