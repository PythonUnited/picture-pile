<template>
  <div id="app">
    <h1>Picture Pile Demo</h1>
    <div class="container">
      <Props/>
    </div>
    <div class="container-fluid">
      <PicturePile polaroid
                   highlight
                   :rotate="5"
                   :scale="3"
                   :width="8"
                   :height="6"/>
    </div>
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
import store from './store/index'

export default {
  store,
  name: 'app',
  components: {
    Props,
    PicturePile
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
  h1 {
    text-align: center;
  }
}
</style>
