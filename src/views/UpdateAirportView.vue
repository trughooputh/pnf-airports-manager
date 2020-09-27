<template>
  <div class="UpdateAirportView">
    <h1 class="my-5">Update airport {{ airportDetails.name }}</h1>
    <p>{{ airportDetails }}</p>
  </div>
</template>

<script>
export default {
  name: 'UpdateAirportView',
  data() {
    return {
      airportDetails: {}
    }
  },
  created () {
    this.airportDetails = this.$store.getters.getAirportById(this.$route.params.id);
  }
}
</script>
