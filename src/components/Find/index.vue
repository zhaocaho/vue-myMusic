<template>
  <section class="find">
    <z-logo></z-logo>
    <z-header></z-header>
    <panel>
      <Swipe :css="{ height: '150px' }" :data="bannerList"></Swipe>
    </panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import Panel from '@/base/Panel.vue'
import Swipe from '@/base/Swipe.vue'
import { mapState, mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
export default {
  name: 'Find',
  components: {
    ZLogo,
    ZHeader,
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
.find {
  .panel {
    margin-top: 0.5rem;
    .swipe {
      // background-color: red;
      height: 150px;
      border-radius: 0.05rem;
      overflow: hidden;
    }
  }
}
</style>
