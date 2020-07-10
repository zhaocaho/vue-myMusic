<template>
  <section class="find_contain">
    <div class="fin_logo">
      <z-logo></z-logo>
      <z-header></z-header>
      <z-player></z-player>
    </div>
    <panel>
      <Swipe :data="bannerList"> </Swipe>
    </panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import ZPlayer from '@/components/public/ZPlayer.vue'
import Panel from '@/base/Panel.vue'
import Swipe from '@/base/Swipe.vue'
import { mapState, mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
export default {
  name: 'Find',
  components: {
    ZLogo,
    ZHeader,
    ZPlayer,
    Panel,
    Swipe
  },
  data() {
    return {
      // 设备型号
      // paltform: 0,
      // banner数据
      data: []
    }
  },
  created() {
    // 获取型号
    // this.paltform = this.judgeSystem()
    // 获取轮播图
    // this.getBanner()
    // console.log(this.platform)
    this.getBannerList(this.platform)
    // console.log(this.platform)
  },
  methods: {
    // 获取轮播图数据
    // getBanner() {
    //   this.$http.get('/banner', { params: { type: 1 } }).then(result => {
    //     if (result.status === 200) {
    //       this.data = result.data.banners
    //       // console.log(this.data)
    //     } else {
    //       console.log('获取数据失败')
    //     }
    //   })
    // },
    // 获取vuex中的方法
    ...mapActions('find', {
      getBannerList: types.BANNER_LISTS
    })
  },
  computed: {
    ...mapState(['platform']),
    ...mapState('find', {
      bannerList: state => state.bannerList
    })
  },
  mounted() {
    // console.log(this.bannerList)
  }
}
</script>

<style lang="scss" scoped>
.find_contain {
  .fin_logo {
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    background-color: white;
  }
  .panel {
    margin-top: 1rem;
    .swipe {
      // background-color: red;
      height: 150px;
      border-radius: 0.05rem;
      overflow: hidden;
    }
  }
}
</style>
