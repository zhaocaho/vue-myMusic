<template>
  <section class="history-record">
    <div>
      <div class="history_title">
        <span>历史记录</span>
        <van-icon name="delete" size=".2rem" @click="deleteHistory" />
      </div>
      <div class="box">
        <div class="content">
          <span v-for="(item, i) in historyList" :key="i">{{ item }}</span>
        </div>
      </div>
    </div>
    <div class="rank">
      <span>热搜榜</span>
      <div>
        <i>1</i>
        <div>
          <p>labanda</p>
          <span>节奏听一遍就忘不掉</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HistoryRecord',
  components: {},
  data() {
    return {
      //   历史记录表
      historyList: []
    }
  },
  created() {
    this.getHistoryList()
  },
  methods: {
    //   获取历史记录
    getHistoryList() {
      this.historyList = JSON.parse(window.localStorage.getItem('historyList'))
      // console.log(this.historyList)
    },
    // 清空历史记录
    deleteHistory() {
      window.localStorage.removeItem('historyList')
      this.getHistoryList()
    }
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
@import 'css/base.scss';
.history-record {
  margin-top: 0.15rem;
  > div {
    .history_title {
      @include list(row);
      justify-content: space-between;
      font-size: 0.14rem;
      height: 0.3rem;
      padding: 0 0.05rem;
    }
    .box {
      width: 100%;
      box-sizing: border-box;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      .content {
        height: 0.4rem;
        //   white-space: nowrap;
        @include list(row);
        flex-wrap: nowrap;
        align-items: center;
        span {
          font-size: 0.14rem;
          margin-right: 0.1rem;
          white-space: nowrap;
          background-color: #c9c9c9;
          border-radius: 15px;
          padding: 0.05rem 0.1rem;
        }
      }
    }
  }
  .rank {
    > div {
      @include list(row);
      i {
        width: 0.3rem;
        height: 0.3rem;
        line-height: 0.3rem;
        text-align: center;
      }
      > div {
        span {
          font-size: 0.12rem;
          color: gray;
        }
      }
    }
  }
}
</style>
