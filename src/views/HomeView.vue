<template>
  <div class="HomeView">
    <h1 class="text-left">Homepage</h1>
    <SearchBar
      @update:search="updateSearch"
    />
    <AirportsList
      :search="search"
      v-if="HasAirports"
    />
    <Loader
      v-else
    />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar/SearchBarComponent'
import AirportsList from '@/components/AirportsList/AirportsListComponent'
import Loader from '@/components/Loader/LoaderComponent'

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    AirportsList,
    Loader
  },
  data() {
    return {
      search: ''
    }
  },
  computed: {
    HasAirports() {
      return this.$store.state.airports.length > 0;
    }
  },
  methods: {
    updateSearch(newSearch) {
      this.search = newSearch;
    }
  },
}
</script>
