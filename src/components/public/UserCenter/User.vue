<template>
  <section :class="['user']">
    <!-- 立即登录 -->
    <router-link to="/login" v-if="!isLogin">
      <van-button
        color="linear-gradient(to right, #e21918, #ff4a4a)"
        round
        size="small"
      >
        立即登录
      </van-button>
    </router-link>
    <!-- 已经登录的状态 -->
    <div class="me" v-else>
      <i></i>
      <span>{{ personalData.nickname }}</span>
    </div>
    <!-- 我的消息等标签 -->
    <div class="my_ifo">
      <van-tabbar :fixed="false" :border="false">
        <van-tabbar-item badge="3" to="/message">
          <span>我的消息</span>
          <template #icon>
            <img src="@/assets/img/xinfeng.png" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>我的好友</span>
          <template #icon>
            <img src="@/assets/img/haoyou.png" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>个人主页</span>
          <template #icon>
            <img src="@/assets/img/zhuye.png" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>个性装扮</span>
          <template #icon>
            <img src="@/assets/img/yifu.png" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'User',
  components: {},
  data() {
    return {}
  },
  created() {
    // this.getLoginStatus()
    // this.getCookie()
  },
  methods: {
    //  获取是否登录状态
    // getLoginStatus() {
    //   const params = {
    //     phone: 18010672630,
    //     password: 'Zc931103'
    //   }
    //   this.$http.post('/login/cellphone', params).then(result => {
    //     console.log(result)
    //   })
    // }
  },
  computed: {
    ...mapState(['personalData', 'isLogin'])
    // 利用cookie判断是否已经登录,,这里可能是网络问题，不好用
    // isLogin() {
    //   if (document.cookie) {
    //     return false
    //   } else {
    //     return true
    //   }
    // }
  }
}
</script>
<style lang="scss" scoped>
@import 'css/base.scss';
.user {
  @include list();
  align-items: center;
  .van-button {
    width: 1rem;
    height: 0.2rem;
    margin: 0.1rem 0;
  }
  .me {
    @include list(row);
    justify-content: flex-start;
    width: 100%;
    height: 0.4rem;
    align-items: center;
    i {
      width: 0.3rem;
      height: 0.3rem;
      background-color: red;
      border-radius: 50%;
      background: url('../../../assets/img/logo.png') no-repeat;
      background-size: 0.3rem 0.3rem;
      overflow: hidden;
    }
    span {
      flex: 1;
      height: 0.4rem;
      line-height: 0.4rem;
      padding-left: 0.1rem;
    }
  }
  .my_ifo {
    width: 100%;
    margin-top: 5px;
    span {
      color: #373737;
      font-size: 0.1rem;
    }
    img {
      width: 0.25rem;
      height: 0.25rem;
    }
  }
}
</style>
