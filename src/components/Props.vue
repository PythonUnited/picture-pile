<template>
    <div class="props">
      <div>
        <label for="source">Source</label>
        <input class="form-control" id="source" type="text" v-model="dataPictureSource">
        <button type="button" class="btn btn-primary" v-on:click="getPictures()">
          get pictures
        </button>
        <button type="button" class="btn btn-info" v-on:click="getSource()">
          source
        </button>
      </div>

      <div>
        <label for="polaroid">Polaroids</label>
        <input class="form-control" id="polaroid" type="checkbox" v-model="dataPolaroid"/>
      </div>
      <div>
        <label for="highlight">Highlights</label>
        <input class="form-control" id="highlight" type="checkbox" v-model="dataHighlight"/>
      </div>
      <div>
        <label for="rotate">Rotate</label>
        <input class="form-control" id="rotate" type="number" v-model="dataRotate"/>
      </div>
      <div>
        <label for="scale">Scale</label>
        <input class="form-control" id="scale" type="number" v-model="dataScale"/>
      </div>
      <div>
        <label for="width">Width</label>
        <input class="form-control" id="width" type="number" v-model="dataWidth"/>
      </div>
      <div>
        <label for="height">Height</label>
        <input class="form-control" id="height" type="number" v-model="dataHeight"/>
      </div>
    </div>

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
    },
    dataPictureSource: {
      get () {
        return store.state.dataPictureSource
      },
      set (newValue) {
        return this.$store.dispatch('setDataPictureSource', newValue)
      }
    }
  },
  methods: {
    getSource: function() {
      window.location.href = this.dataPictureSource
    }
  }
}
</script>

<style scoped>
  .props {
    display: flex;
    justify-content: space-around;
  }
</style>
