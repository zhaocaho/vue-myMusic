<template>
  <section class="swipe">
    <!-- 轮播组件 -->
    <van-swipe
      :loop="options.loop"
      :autoplay="options.autoplay"
      :vertical="vertical"
      :show-indicators="indicator.show"
      :indicator-color="indicator.white"
      :style="css"
    >
      <van-swipe-item v-for="(image, index) in data" :key="index">
        <img v-lazy="image.imageUrl" />
      </van-swipe-item>
    </van-swipe>
  </section>
</template>
<script>
export default {
  name: 'Swipe',
  data() {
    return {}
  },
  props: {
    //   自动播放与循环播放
    options: {
      type: Object,
      default() {
        return {
          autoplay: 3000,
          loop: true
        }
      }
    },
    // 纵向
    vertical: {
      type: Boolean,
      default: false
    },
    // 指示器配置
    indicator: {
      type: Object,
      default() {
        return {
          show: true,
          color: 'white'
        }
      }
    },
    // 样式配置
    css: {
      type: Object,
      default() {
        return {}
      }
    },
    // 图片数据
    data: {
      type: Array,
      default() {
        return [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.swipe {
  //   background-color: red;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
