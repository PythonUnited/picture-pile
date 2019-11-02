<template>
  <div id="app">
    <Props></Props>
    <PicturePile msg="Python United Picture Pile"
                 polaroid
                 highlight
                 :rotate="5"
                 :scale="3"
                 :width="8"
                 :height="6"/>
  </div>
</template>

<script>
import Props from './components/Props.vue'
import PicturePile from './components/PicturePile.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Props,
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
