<template>
  <div class="AirportActions d-flex">
    <div class="AirportActions__Edit mr-2">
      <router-link 
        :to="`/airport/update/${airport.id}`"
        :title='`Update airport "${airport.name}"`'
        class="btn btn-light "
      >
        <span class="mr-2">Edit</span>
        <i class="fas fa-edit" />
      </router-link>
    </div>
    <div class="AirportActions__Map mr-2">
      <a 
        :href="getAirportURLMaps(airport)
        "
        target="_blank"
        :title='`See "${airport.name}" on GoogleMaps`'
        class="btn btn-light"
      >
        <span class="mr-2">Map</span>
        <i class="fas fa-map" />
      </a>
    </div>
    <div class="AirportActions__Delete mr-2">
      <div
        class="btn btn-danger"
        @click="deleteAirport(airport)"
      >
        <span class="mr-2">Delete</span>
        <i
          class="fas fa-trash"
          :title='`Delete airport "${airport.name}"`'
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AirportActions',
  props: {
    airport: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteAirport(airport) {
      const confirmDelete = confirm(`Are you sure to remove "${airport.name}" from the list?`);
      if (confirmDelete == true) {
        this.$store.dispatch('removeAirport', airport.id);
      }
    },
    getAirportURLMaps(airport) {
      return `https://maps.google.com/?q=${airport.latitude},${airport.longitude}&ll=${airport.latitude},${airport.longitude}&z=13`
    }
  }
}
</script>

<style lang="scss" scoped>
.AirportActions {
  .btn-light {
    color: #000;
  }
}
</style>

