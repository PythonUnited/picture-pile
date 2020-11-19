import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import VuePlugin from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.esm.js",
    format: "es"
  },
  plugins: [
    commonjs(),
    VuePlugin({
      css: false
    }),
    css(),
    alias({
      resolve: [ '.js', '.ts' ],
      entries: [
        { find: 'vue', replacement: 'node_modules/vue/dist/vue.runtime.esm-browser.js' }
      ]
    }),

  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
}
