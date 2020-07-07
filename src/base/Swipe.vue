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
      <van-swipe-item
        v-for="(image, index) in data"
        :key="index"
        :style="boxCss"
      >
        <!-- <div> -->
        <img v-lazy="image[picUrl]" :style="imgCss" />
        <slot v-if="imgCss.width">可以字定义内容</slot>
        <!-- </div> -->
      </van-swipe-item>
    </van-swipe>
  </section>
</template>
<script>
import { mapState } from 'vuex'
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
        return {
          width: '100%',
          height: '150px'
        }
      }
    },
    // 盒子样式
    boxCss: {
      type: Object,
      default() {
        return {}
      }
    },
    // 图片宽度
    imgCss: {
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
  },
  computed: {
    ...mapState(['platform']),
    picUrl() {
      switch (this.platform) {
        case 0:
          return 'imageUrl'
        default:
          return 'pic'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swipe {
  //   background-color: red;
  .van-swipe {
    // width: 50%;
    .van-swipe-item {
      display: flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        box-shadow: 0 0 5px #1e1e1e;
      }
    }
  }
}
</style>
