import { reject, orderBy } from 'lodash'

import airportsData from '@/data/airports.json'
import timezonesData from '@/data/timezones.json'

export const NAMESPACE = 'AirportStore'

export default {
  state: {
    airports: [],
    timezones: [],
    selectedAirport: null,
  },
  mutations: {
    SET_AIRPORTS: (state, payload) => {
      state.airports = payload
    },
    SET_TIMEZONES: (state, payload) => {
      state.timezones = payload
    },
    SET_SELECTED_AIRPORT: (state, payload) => {
      state.selectedAirport = payload
    },
    ADD_AIRPORT: (state, payload) => {
      state.airports.push(payload)
    },
    SET_AIRPORT: (state, payload) => {
      const index = state.airports.findIndex((airport) => airport.id === payload.id)
      state.airports.splice(index, 1, payload);
    },
    REMOVE_AIRPORT: (state, payload) => {
      state.airports = payload
    },

  },
  actions: {
    loadData: async ({ dispatch }) => {
      // Simulate API Call response time
      await setTimeout(() => {
        dispatch('loadAirports');
        dispatch('loadTimezones');
      }, 200);
    },
    loadAirports: ({ state, commit }) => {
      if (state.airports.length === 0) {
        commit('SET_AIRPORTS', orderBy(airportsData, 'id', 'asc'))
      }
    },
    loadTimezones: ({ state, commit }) => {
      if (state.timezones.length === 0) {
        commit('SET_TIMEZONES', timezonesData)
      }
    },
    selectedAirport: ({ commit }, airport) => {
      commit('SET_SELECTED_AIRPORT', airport)
    },
    addAirport: async ({ commit, getters, state }, newAirport) => {
      const alreadyIataExisting = getters.isIataExisiting(newAirport.iata);
      if (!alreadyIataExisting) {
        try {
          const lastElement = state.airports.reduce((prev, current) => current.id > prev.id ? current : prev);
          newAirport.id = lastElement.id + 1;
          await commit('ADD_AIRPORT', newAirport)
        }
        catch(error) {
          console.log(error);
        }
      }
    },
    updateAirport: async ({ commit }, newAirport) => {
      try {
        await commit('SET_AIRPORT', newAirport);
      }
      catch(error) {
        console.log(error);
      }
    },
    removeAirport: async ({ state, commit }, airportId) => {
      try {
        const filteredAirports = reject(state.airports, (el) => { return el.id === airportId })
        await commit('REMOVE_AIRPORT', filteredAirports)
      }
      catch(error) {
        console.log(error);
      }
    },
  },
  getters: {
    getFilteredAirports: (state) => (search) => {
      const searchLowerCase = search.toLowerCase(); // For case sensitive research
      const airportsFiltered = state.airports
        .filter(airport => {
          return (airport.name && airport.name.toLowerCase().indexOf(searchLowerCase) > -1)
          || (airport.icao && airport.icao.toLowerCase() === searchLowerCase)
          || (airport.iata && airport.iata.toLowerCase() === searchLowerCase)
        })
      return airportsFiltered
    },
    getAirportById: (state) => async (id) => {
      return await state.airports.find(airport => airport.id === parseInt(id)) || {};
    },
    isIataExisiting: (state) => {
      return iata => state.airports.find(item => item.iata && item.iata === iata)
    }
  }
}
