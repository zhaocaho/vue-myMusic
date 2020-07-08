<template>
  <section class="play_disk">
    <div class="play_cicle">
      <img src="@/assets/img/logo.png" alt="" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'Disk'
}
</script>

<style lang="scss" scoped>
.play_disk {
  position: relative;
  height: 70%;
  width: 100%;
  .play_cicle {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-sizing: border-box;
    border: 0.1rem solid #e6e6e6;
    // background-color: red;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      animation: imgMove 5s infinite linear;
    }
  }
}
@keyframes imgMove {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
