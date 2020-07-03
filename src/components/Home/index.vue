<template>
  <section class="home">
    <z-logo :color="'white'"></z-logo>
    <z-header color="white"></z-header>
    <panel>
      <z-name :showLogin="!isLogin" :name="nickname"></z-name>
      <history :data="userDetailData" :showHistory="isLogin"></history>
    </panel>
  </section>
</template>

<script>
import ZLogo from '@/components/public/ZLogo.vue'
import ZHeader from '@/components/public/ZHeader.vue'
import Panel from '@/base/Panel.vue'
import ZName from '@/components/public/ZName.vue'
import History from './History.vue'
import { mapState, mapActions } from 'vuex'
import * as types from 'store/mutation-types.js'
export default {
  name: 'Home',
  components: {
    ZLogo,
    ZHeader,
    Panel,
    ZName,
    History
  },
  data() {
    return {}
  },
  created() {
    this.isGetUserDetail()
  },
  mounted() {
    console.log(this.userDetailData)
  },
  methods: {
    ...mapActions({
      userDetail: types.USER_DETAIL
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
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background-color: #1e1e1e;
  .panel {
    margin-top: 0.5rem;
    .z-name {
      // background-color: red;
      color: white;
    }
  }
}
</style>
