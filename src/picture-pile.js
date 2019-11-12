import Vue from 'vue';
// eslint-disable-next-line
import vueCustomElement from 'vue-custom-element';
import PicturePile from './components/PicturePile.vue';

// Enable the plugin
Vue.use(PicturePile);

// Register your component
Vue.customElement('picture-pile', PicturePile, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
  shadow: true,
  shadowCss: `@import '${process.env.VUE_APP_STATIC_URL}/picture-pile.css';`,
});