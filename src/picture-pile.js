// import Vue from 'vue';
// // eslint-disable-next-line
// import vueCustomElement from 'vue-custom-element';
// import PicturePile from './components/PicturePile.vue';

// // Enable the plugin
// Vue.use(PicturePile);

// // Register your component
// Vue.customElement('picture-pile', PicturePile, {
//   // Additional Options: https://github.com/karol-f/vue-custom-element#options
//   shadow: true,
//   shadowCss: `@import '${process.env.VUE_APP_STATIC_URL}/picture-pile.css';`,
// });

import PicturePile from './components/PicturePile.vue';
import { createApp } from "vue@next";
import styles from "${process.env.VUE_APP_STATIC_URL}/picture-pile.css";

class wrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.removeAttribute = this.removeAttribute.bind(this);
    this.shadowRoot.setAttribute = this.setAttribute.bind(this);
  }

  connectedCallback() {
    if (styles) this.shadowRoot.adoptedStyleSheets = [styles];
    createApp(PicturePile).mount(this.shadowRoot);
  }
}

customElements.define("picture-pile", wrapper);
