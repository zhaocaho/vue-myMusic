<template>
  <section class="search_contain">
    <panel>
      <search-input></search-input>
      <search-list v-if="searchState"></search-list>
      <history-record v-else></history-record>
    </panel>
  </section>
</template>
<script>
import Panel from '@/base/Panel.vue'
import SearchInput from './SearchInput.vue'
import HistoryRecord from './HistoryRecord.vue'
import SearchList from './SearchList.vue'
export default {
  name: 'Search',
  components: {
    Panel,
    SearchInput,
    HistoryRecord,
    SearchList
  },
  computed: {
    searchState() {
      return this.$store.state.music.searchState
    }
  }
}
</script>
<style lang="scss" scoped></style>
