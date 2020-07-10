<template>
  <section class="home_contain">
    <div class="home_logo">
      <z-logo :color="'white'"></z-logo>
      <z-header color="white"></z-header>
      <z-player></z-player>
    </div>
    <panel class="panel1">
      <z-name :showLogin="!isLogin" :name="nickname" :bgcurl="bgcUrl"></z-name>
      <history :data="userDetailData" :showHistory="isLogin"></history>
    </panel>
    <panel class="white_contain">
      <pic-layout
        :data="data"
        picProp="src"
        desProp="descrip"
        picNum="2"
      ></pic-layout>
    </panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import ZPlayer from '@/components/public/ZPlayer.vue'
import Panel from '@/base/Panel.vue'
import ZName from '@/components/public/ZName.vue'
import History from './History.vue'
import PicLayout from '@/base/PicLayout.vue'
import { mapState, mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
export default {
  name: 'Home',
  components: {
    ZLogo,
    ZHeader,
    ZPlayer,
    Panel,
    ZName,
    History,
    PicLayout
  },
  data() {
    return {
      data: [
        {
          src:
            'http://p1.music.126.net/hij1nRHf6du9_22aaaGHIQ==/109951164579323749.jpg',
          descrip:
            '我的描述1我的描述1我的描述1我的描述1我的描述1我的描述1我的描述1我的描述1'
        },
        {
          src:
            'http://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',
          descrip: '我的描述2'
        },
        {
          src:
            'http://p1.music.126.net/hij1nRHf6du9_22aaaGHIQ==/109951164579323749.jpg',
          descrip: '我的描述3'
        },
        {
          src:
            'http://p1.music.126.net/hij1nRHf6du9_22aaaGHIQ==/109951164579323749.jpg',
          descrip: '我的描述4'
        },
        {
          src:
            'http://p1.music.126.net/hij1nRHf6du9_22aaaGHIQ==/109951164579323749.jpg',
          descrip: '我的描述5'
        },
        {
          src:
            'http://p1.music.126.net/hij1nRHf6du9_22aaaGHIQ==/109951164579323749.jpg',
          descrip: '我的描述6'
        }
      ]
    }
  },
  created() {
    this.isGetUserDetail()
    this.userRecord({ uid: 1428569889 })
  },
  mounted() {
    // console.log(this.userDetailData)
  },
  methods: {
    ...mapActions({
      userDetail: types.USER_DETAIL,
      userRecord: types.USER_RECORD
    }),
    // 能否获取用户详情(游客登录时候不需要)
    isGetUserDetail() {
      if (this.isLogin) {
        this.userDetail()
      }
    }
  },
  computed: {
    ...mapState(['isLogin']),
    // 用户详情数据
    userDetailData() {
      return this.$store.state.home.userDetailData
    },
    // 用户名称
    nickname() {
      if (this.userDetailData.profile) {
        return this.userDetailData.profile.nickname
      } else {
        return '登录后欢乐更多'
      }
    },
    // 背景图片
    bgcUrl() {
      if (this.userDetailData.profile) {
        return this.userDetailData.profile.avatarUrl
      } else {
        return require('../../assets/img/logo.png')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home_contain {
  background-color: #1e1e1e;
  .home_logo {
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: #1e1e1e;
    width: 100%;
  }
  .panel1 {
    margin-top: 0.9rem;
    .z-name {
      // background-color: red;
      color: white;
    }
  }
  .white_contain {
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}
</style>
