<template>
  <section class="paly_contain">
    <panel>
      <play-title></play-title>
      <disk></disk>
    </panel>
  </section>
</template>
<script>
import Panel from '@/base/Panel.vue'
import PlayTitle from './PlayTitle.vue'
import Disk from './Disk.vue'
export default {
  name: 'Play',
  components: {
    Panel,
    PlayTitle,
    Disk
  }
}
</script>

<style lang="scss" scoped>
.paly_contain {
  background-color: #1e1e1e;
}
</style>
