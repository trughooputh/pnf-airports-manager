<template>
  <li 
    class="AirportItem list-group-item text-left px-3 py-3 d-flex flex-column"
  >
    <p class="AirportItem__Name h4 my-0">{{ airport.name }}</p>
    <span class="AirportItem__Location mr-2">{{ airport.city }} ({{ airport.country }})</span>
    <div class="AirportItem__Action">
      <hr class="my-2" />
      <AirportActions
        class="pt-1"
        :airport="airport"
      />
    </div>
    <div
      class="AirportItem__Card"
      v-if="airport.iata"
    >
      <IataCard
        :iata="airport.iata"
      />
    </div>
  </li>
</template>

<script>

import IataCard from '@/components/IataCard/IataCardComponent'
import AirportActions from '@/components/AirportActions/AirportActionsComponent'

export default {
  name: 'SearchBar',
  components: {
    IataCard,
    AirportActions
  },
  props: {
    airport: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.AirportItem {
  position: relative;
  box-shadow: 1px 9px 26px -1px #cecece;
  &__Card {
    position: absolute;
    right: 1.2rem;
  }
  &__Action {
    width: 100%;
  }
}
</style>
