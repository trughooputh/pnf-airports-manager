<template>
  <div class="FormAirportView">
    <div class="row mb-4">
      <div class="col-sm-12 col-xl-9 text-left my-0">
        <h1>{{ title }}</h1>
      </div>
      <div class="col-sm-12 col-xl-2">
        <IataCard
          :iata="form.iata"
        />
      </div>
    </div>
    <form
      ref="form"
      @submit="handleSubmit"
      @change="handleChange"
      @invalid.capture.prevent="handleInvalid"
    >
      <h3 class="text-left">Airport</h3>
      <div class="row my-2">
        <div class="col-sm-12 col-xl-5">
          <div class="form-group text-left">
            <label for="iata-field">Name</label>
            <input
              type="text"
              name="name"
              v-model="form.name"
              class="form-control"
              placeholder="Name"
              required="true"
              :class="{ 'is-invalid': fieldErrors.name }"
            >
            <small v-if="fieldErrors.name" class="form-text text-muted">{{ fieldErrors.name }}</small>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group text-left">
            <label for="iata-field">IATA</label>
            <input
              type="text"
              id="iata-field"
              name="iata"
              v-model="form.iata"
              class="form-control"
              maxlength="3"
              placeholder="---"
              pattern="^[A-Z_]{3}$"
              required="true"
              :class="{ 'is-invalid':  IsExistingIata || fieldErrors.iata }"
            >
            <small v-if="IsExistingIata" class="form-text text-muted">IATA already existing</small>
            <small v-if="fieldErrors.iata" class="form-text text-muted">{{ fieldErrors.iata }}</small>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group text-left">
            <label for="iata-field">ICAO</label>
            <input
            type="text"
            name="icao"
            v-model="form.icao"
            maxlength="4"
            class="form-control"
            placeholder="ICAO"
            pattern="^[A-Z_]{4}$"
            required="true"
            :class="{ 'is-invalid': fieldErrors.icao }"
          >
          <small v-if="fieldErrors.icao" class="form-text text-muted">{{ fieldErrors.icao }}</small>
          </div>
        </div>
      </div>
      <hr />
      <h3 class="text-left">Location</h3>
      <div class="row my-2">
        <div class="col-sm-12 col-xl-4">
          <div class="form-group text-left">
            <label for="iata-field">City</label>
            <input
              type="text"
              name="city"
              v-model="form.city"
              class="form-control"
              placeholder="Paris"
              required="true"
              :class="{ 'is-invalid': fieldErrors.city }"
            >
            <small v-if="fieldErrors.city" class="form-text text-muted">{{ fieldErrors.city }}</small>
          </div>
        </div>
        <div class="col-sm-12 col-xl-4">
          <div class="form-group text-left">
            <label for="iata-field">Country</label>
            <input
              type="text"
              name="country"
              v-model="form.country"
              class="form-control"
              placeholder="France"
              required="true"
              :class="{ 'is-invalid': fieldErrors.country }"
            >
            <small v-if="fieldErrors.country" class="form-text text-muted">{{ fieldErrors.country }}</small>
          </div>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-2">
          <div class="form-group text-left">
            <label for="iata-field">Altitude</label>
            <input
              type="text"
              name="altitude"
              v-model="form.altitude"
              class="form-control"
              placeholder="10"
              pattern="^[0-9_]{1,5}$"
              maxlength="2"
              required="true"
              :class="{ 'is-invalid': fieldErrors.altitude }"
            >
            <small v-if="fieldErrors.altitude" class="form-text text-muted">{{ fieldErrors.altitude }}</small>
          </div>
        </div>
        <div class="col-2">
          <div class="form-group text-left">
            <label for="iata-field">DST</label>
            <input
              type="text"
              name="DST"
              v-model="form.DST"
              class="form-control"
              placeholder="U"
              pattern="^[a-zA-Z_]{1,2}$"
              maxlength="2"
              required="true"
              :class="{ 'is-invalid': fieldErrors.DST }"
            >
            <small v-if="fieldErrors.DST" class="form-text text-muted">{{ fieldErrors.DST }}</small>
          </div>
        </div>
        <div class="col-sm-12 col-xl-4">
          <div class="form-group text-left">
            <label for="iata-field">TZ</label>
            <select 
              class="form-control"
              v-model="form.tz"
              name="tz"
              required="true"
              :class="{ 'is-invalid': fieldErrors.tz }"
            >
              <option value="">Select a timezone</option>
              <option
                v-for="(tz, index) in getTimezones()"
                :value="index"
                :key="`tz-${index}`"
                :selected="form.tz === index"
              >
                {{ index }} {{ tz }}
              </option>
            </select>
            <small v-if="fieldErrors.tz" class="form-text text-muted">{{ fieldErrors.tz }}</small>
          </div>
        </div>
        <div class="col-2">
          <div class="form-group text-left">
            <label for="iata-field">Timezone</label>
            <input
              type="text"
              name="timezone"
              v-model="form.timezone"
              class="form-control"
              placeholder="-6"
              pattern="[-+]?[0-9]*[.,]?[0-9]+"
              maxlength="3"
              required="true"
              :class="{ 'is-invalid': fieldErrors.timezone }"
            >
            <small v-if="fieldErrors.timezone" class="form-text text-muted">{{ fieldErrors.timezone }}</small>
          </div>
        </div>
      </div>
      <div class="row my-2">
        <div class="col-4">
          <div class="form-group text-left">
            <label for="iata-field">Latitude</label>
            <input
              type="text"
              name="latitude"
              v-model="form.latitude"
              class="form-control"
              placeholder="65.555801"
              pattern="-?\d{1,3}\.\d+"
              required="true"
              :class="{ 'is-invalid': fieldErrors.latitude }"
            >
            <small v-if="fieldErrors.latitude" class="form-text text-muted">{{ fieldErrors.latitude }}</small>
          </div>
        </div>
        <div class="col-4">
          <div class="form-group text-left">
            <label for="iata-field">Longitude</label>
            <input
              type="text"
              name="longitude"
              v-model="form.longitude"
              class="form-control"
              placeholder="-23.965"
              pattern="-?\d{1,3}\.\d+"
              required="true"
              :class="{ 'is-invalid': fieldErrors.longitude }"
            >
            <small v-if="fieldErrors.longitude" class="form-text text-muted">{{ fieldErrors.longitude }}</small>
          </div>
        </div>
      </div>
      <hr />
      <h3 class="text-left">Details</h3>
      <div class="row my-2">
        <div class="col">
          <input
            type="text"
            name="source"
            v-model="form.source"
            class="form-control"
            placeholder="Source"
            required="true"
            :class="{ 'is-invalid': fieldErrors.source }"
          >
          <small v-if="fieldErrors.source" class="form-text text-muted">{{ fieldErrors.source }}</small>
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary my-4"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>

import IataCard from '@/components/IataCard/IataCardComponent'

export default {
  name: 'FormAirportView',
  components: {
    IataCard
  },
  data() {
    return {
      isEditForm: false,
      fieldErrors: {},
      title: '',
      form: {
        name: '',
        iata: '',
        icao: '',
        country: '',
        city: '',
        altitude: '',
        timezone: '',
        DST: '',
        tz: '',
        latitude: '',
        longitude: '',
        source: '',
        type: 'airport'
      }
    }
  },
  computed: {
    IsExistingIata() {
      return this.$store.getters.isIataExisiting(this.form.iata) && !this.isEditForm
    }
  },
  created () {
    console.log('Created');
    this.$store.dispatch('loadData')
      .then(() => {
        console.log('after');
        if (this.$route.params.id) {
          this.isEditForm = true;
          this.$store.getters.getAirportById(this.$route.params.id)
            .then(airport => {
              this.form = airport;
              this.title = `Update ${this.form.name}`;
            });
        }
        else {
          this.title = "Add new airport";
        }
      })
  },
  methods: {
    getTimezones() {
      return this.$store.state.timezones;
    },
    handleSubmit(e) {
      e.preventDefault();
      if (this.$refs.form.checkValidity() && !this.IsExistingIata) {
        const newAirport = this.form;
        if (this.form.id) {
          this.$store.dispatch('updateAirport', newAirport).then(() => {
            alert(`Airport ${this.form.name} updated`);
            this.redirectPage();
          });
        }
        else {
          this.$store.dispatch('addAirport', newAirport).then(() => {
            alert('Airport added');
            this.redirectPage();
          });
        }
      } else {
        console.log('Invalid form');
      }
    },
    redirectPage() {
      this.fieldErrors = {};
      this.$router.push({ path: `/?search=${this.form.iata}` });
    },
    handleChange(e) {
      this.fieldErrors = {
        ...this.fieldErrors,
        [e.target.name]: ''
      };
    },
    handleInvalid(e) {
      this.fieldErrors = {
        ...this.fieldErrors,
        [e.target.name]: e.target.validationMessage
      };
    },
  }
}
</script>

<style lang="scss" scoped>
.FormAirportView {
  h3 {
    text-decoration: underline;
  }
}
</style>

