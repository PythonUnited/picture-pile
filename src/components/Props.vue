<template>
    <form class="props">
      <div class="form-group">
        <label for="polaroid">Polaroids</label>
        <input class="form-control" id="polaroid" type="checkbox" v-model="dataPolaroid"/>
      </div>

      <div>
        <label for="highlight">Highlights</label>
        <input class="form-control" id="highlight" type="checkbox" v-model="dataHighlight"/>
      </div>

      <div>
        <label for="rotate">Rotate (deg)</label>
        <input class="form-control" id="rotate" type="number" v-model="dataRotate"/>
      </div>

      <div>
        <label for="scale">Scale</label>
        <input class="form-control" id="scale" type="number" v-model="dataScale"/>
      </div>

      <div>
        <label for="width">Width (rem)</label>
        <input class="form-control" id="width" type="number" v-model="dataWidth"/>
      </div>

      <div>
        <label for="height">Height (rem)</label>
        <input class="form-control" id="height" type="number" v-model="dataHeight"/>
      </div>
    </form>
</template>

<script>
import store from '../store/index'
export default {
    name: "Props",
  data() {
    return {
    };
  },
  computed: {
    dataPolaroid: {
      get() {
        return store.state.dataPolaroid
      },
      set(newValue) {
        return this.$store.dispatch('setDataPolaroid', newValue)
      },
    },
    dataHighlight: {
      get () {
        return store.state.dataHighlight
      },
      set (newValue) {
        return this.$store.dispatch('setDataHighlight', newValue)
      }
    },
    dataRotate: {
      get () {
        return store.state.dataRotate
      },
      set (newValue) {
        return this.$store.dispatch('setDataRotate', newValue)
      }
    },
    dataScale: {
      get () {
        return store.state.dataScale
      },
      set (newValue) {
        return this.$store.dispatch('setDataScale', newValue)
      }
    },
    dataWidth: {
      get () {
        return store.state.dataWidth
      },
      set (newValue) {
        return this.$store.dispatch('setDataWidth', newValue)
      }
    },
    dataHeight: {
      get () {
        return store.state.dataHeight
      },
      set (newValue) {
        return this.$store.dispatch('setDataHeight', newValue)
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
  .props {
    display: flex;
    justify-content: space-around;
  }
</style>
