import Vue from 'vue';
import Vuex from 'vuex';

// Store
import AirportStore from './AirportStore';

Vue.use(Vuex);

const store = new Vuex.Store(AirportStore);

export default store;
