<template>
  <form class="props row">
    <div class="col-2">
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" id="polaroid" type="checkbox" v-model="dataPolaroid" />
          <label class="form-check-label" for="polaroid">Polaroids</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" id="highlight" type="checkbox" v-model="dataHighlight" />
          <label class="form-check-label" for="highlight">Highlights</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" id="squircle" type="checkbox" v-model="dataSquircle" />
          <label class="form-check-label" for="squircle">Squircles</label>
        </div>
      </div>
    </div>

    <div class="col-8">
      <div class="ml-5 form-row justify-content-md-end">
        <div class="col-6 col-sm-3 col-md-2 align-self-end">
          <label for="rotate">Rotate (deg)</label>
          <input class="form-control" id="rotate" type="number" pattern="\d*" v-model="dataRotate" />
        </div>

        <div class="col-6 col-sm-3 col-md-2 align-self-end">
          <label for="scale">Scale</label>
          <input class="form-control" id="scale" type="number" pattern="\d*" v-model="dataScale" />
        </div>

        <div class="col-6 col-sm-3 col-md-2 align-self-end">
          <label for="shadow">Shadow (px)</label>
          <input class="form-control" id="shadow" type="number" pattern="\d*" v-model="dataShadow" />
        </div>

        <div class="col-6 col-sm-3 col-md-2 align-self-end">
          <label for="width">Width (rem)</label>
          <input class="form-control" id="width" type="number" pattern="\d*" v-model="dataWidth" />
        </div>

        <div class="col-6 col-sm-3 col-md-2 align-self-end">
          <label for="height">Height (rem)</label>
          <input class="form-control" id="height" type="number" pattern="\d*" v-model="dataHeight" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import store from "../store/index";
export default {
  name: "Props",
  data() {
    return {};
  },
  computed: {
    dataPolaroid: {
      get() {
        return store.state.dataPolaroid;
      },
      set(newValue) {
        return this.$store.dispatch("setDataPolaroid", newValue);
      }
    },
    dataHighlight: {
      get() {
        return store.state.dataHighlight;
      },
      set(newValue) {
        return this.$store.dispatch("setDataHighlight", newValue);
      }
    },
    dataSquircle: {
      get() {
        return store.state.dataSquircle;
      },
      set(newValue) {
        return this.$store.dispatch("setDataSquircle", newValue);
      }
    },
    dataRotate: {
      get() {
        return store.state.dataRotate;
      },
      set(newValue) {
        return this.$store.dispatch("setDataRotate", newValue);
      }
    },
    dataScale: {
      get() {
        return store.state.dataScale;
      },
      set(newValue) {
        return this.$store.dispatch("setDataScale", newValue);
      }
    },
    dataShadow: {
      get() {
        return store.state.dataShadow;
      },
      set(newValue) {
        return this.$store.dispatch("setDataShadow", newValue);
      }
    },
    dataWidth: {
      get() {
        return store.state.dataWidth;
      },
      set(newValue) {
        return this.$store.dispatch("setDataWidth", newValue);
      }
    },
    dataHeight: {
      get() {
        return store.state.dataHeight;
      },
      set(newValue) {
        return this.$store.dispatch("setDataHeight", newValue);
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
/*.props {*/
/*  display: flex;*/
/*  justify-content: space-around;*/
/*}*/
</style>
