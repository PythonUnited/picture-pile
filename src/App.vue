<template>
  <div id="app">
    <PicturePile msg="Python-United-Picture-Pile" polaroid="true" />
  </div>
</template>

<script>
import PicturePile from './components/PicturePile.vue'

export default {
  name: 'app',
  components: {
    PicturePile
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
