<template>
  <div id="app">
    <h1>Picture Pile Demo</h1>
    <div class="version">
      <small>
        <a
          href="https://git.pythonunited.com/pu/picture-pile/"
          target="_blank"
        >version {{ $store.getters.appVersion }}</a>
      </small>
    </div>
    <hr />

    <div class="container">
      <Props />
    </div>

    <hr />

    <div class="container-fluid">
      <PicturePile
        src="http://localhost:8080/VMD/pythonunited/verzameling-items-t-b-v-picture-pile/picturepile.json"
        polaroid
        highlight
        :rotate="5"
        :scale="3"
        :shadow="1"
        :width="8"
        :height="8"
      />
    </div>

    <hr />

    <div class="copyright mb-5">
      <small>
        <a href="https://pythonunited.com">&copy; Python United {{ thisYear }}</a>
      </small>
    </div>
  </div>
</template>

<script>
import Props from "./components/Props.vue";
import PicturePile from "./components/PicturePile.vue";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./store/index";

export default {
  store,
  name: "app",
  components: {
    Props,
    PicturePile
  },
  computed: {
    thisYear: function() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
  h1,
  .version,
  .copyright {
    text-align: center;
  }
}
</style>
