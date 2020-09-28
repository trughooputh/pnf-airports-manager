<template>
  <div class="AirportsList">
    <ul 
      class="list-group"
      v-if="AirportFiltered.length > 0"
    >
      <transition-group name="list" tag="p">
        <AirportItem
          v-for="(airport, index) in AirportFiltered"
          :key="`key-${index}`"
          :airport="airport"
        />
      </transition-group>
    </ul>
    <p v-else class="AirportsList__NoResults my-5 text-center">
      <i class="fa fa-frown mr-3" aria-hidden="true"></i>
      <span class="h2">No results...</span>
    </p>
  </div>
</template>

<script>
import AirportItem from '@/components/AirportItem/AirportItemComponent'

export default {
  name: 'AirportsList',
  components: {
    AirportItem
  },
  props: {
    search: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      limit: 0,
      nbItems: 25
    }
  },
  computed: {
    AirportFiltered() {
      return this.$store.getters.getFilteredAirports(this.search).slice(this.limit, this.limit + this.nbItems);
    }
  }
}
</script>

<style lang="scss" scoped>
$pink-color: #ff80e7;
.list-enter-active, .list-leave-active {
  transition: all .3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.AirportsList {
  img {
    max-width: 110px;
  }
  &__NoResults {
    color: $pink-color;
    i {
      font-size: 2rem;
    }
    span {

    }
  }
}
</style>
