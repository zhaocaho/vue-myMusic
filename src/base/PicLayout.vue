<template>
  <section class="pic-layout">
    <div class="pic-title">
      <h3>{{ title }}</h3>
      <span>查看更多</span>
    </div>
    <div class="pic-content">
      <div
        class="pic-box"
        v-for="(item, i) in data.slice(0, Number(renderNum))"
        :key="i"
        :style="{ width }"
      >
        <img :src="item[picProp]" alt="#" />
        <span>{{ item[desProp] }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PicLayout',
  data() {
    return {}
  },
  methods: {},
  computed: {
    // 图片宽度
    width() {
      const n = Number(this.picNum)
      return `${100 / n}%`
    }
  },
  mounted() {},
  props: {
    // 标题名称
    title: {
      type: String,
      default: '标题'
    },
    // 数据源
    data: {
      type: Array,
      default() {
        return []
      }
    },
    // 数据结构
    picProp: {
      type: String,
      default: ''
    },
    desProp: {
      type: String,
      default: ''
    },
    // 一排放几张图
    picNum: {
      // type: String,
      default: '2'
    },
    // 渲染几条数据
    renderNum: {
      default: '99'
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'css/base.scss';
.pic-layout {
  .pic-title {
    @include list(row);
    justify-content: space-between;
    align-items: center;
    h3 {
      margin-left: 0.1rem;
    }
    span {
      border: 1px solid #f1f3f4;
      box-sizing: border-box;
      border-radius: 10px;
      font-size: 0.1rem;
      padding: 0 0.05rem;
    }
  }
  .pic-content {
    @include list(row);
    justify-content: flex-start;
    flex-wrap: wrap;
    .pic-box {
      // width: 30%;
      margin-top: 0.1rem;
      @include list();
      align-items: center;
      img {
        width: 90%;
        box-shadow: 0 0 5px #1e1e1e;
      }
      span {
        width: 90%;
        font-size: 0.12rem;
        line-height: 0.2rem;
        height: 0.4rem;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        overflow: hidden;
        color: #7e6a6c;
      }
    }
  }
}
</style>
