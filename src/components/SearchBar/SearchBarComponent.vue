<template>
  <div class="SearchBar">
    <form>
      <div class="form-group text-left">
        <label for="SearchBarInput">Search an airport</label>
        <input
          type="text"
          class="form-control"
          id="SearchBarInput"
          aria-describedby="SearchBarHelp"
          v-model="search"
          @input="updateSearch"
          placeholder="JFK, Barcelona, Adolfo Suárez Madrid–Barajas Airport, ..."
        >
        <small id="SearchBarHelp" class="form-text text-muted">Search by name, icoa or iata.</small>
      </div>
    </form>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'SearchBar',
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    if (this.$route.query.search) {
      this.search = this.$route.query.search;
      this.updateSearch();
    }
  },
  methods: {
    updateSearch: debounce(function() {
      this.$emit('update:search', this.search);
    }, 500)
 }
};

</script>

<style lang="scss" scoped>
.SearchBar {
}
</style>
