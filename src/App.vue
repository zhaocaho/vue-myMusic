<template>
  <article id="app">
    <router-view></router-view>
  </article>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  created() {
    this.judgeSystem()
  },
  methods: {
    // 页面加载前获取设备型号
    ...mapMutations(['judgeSystem'])
  }
}
</script>

<style></style>
