<template>
  <div class="pile-of-pictures" :class="pileOfPicturesClasses()">
    <svg width="0" height="0">
      <defs>
        <clipPath id="squircle-clip" clipPathUnits="objectBoundingBox">
          <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z" />
        </clipPath>
      </defs>
    </svg>
    <template v-for="pic in picturePile">
      <component
        v-bind:key="pic.id"
        class="picture-wrapper"
        :is="pic.url ? 'a' : 'div'"
        :href="pic.url"
        :target="pic.url ? '_blank' : ''"
        :style="{
                     'box-shadow': dataShadow[0],
                     'filter': dataShadow[1],
                     'z-index': zIndex(pic),
                     'transform': 'scale(' + scaleSize(pic) + ') rotate(' + rotateDeg() + 'deg)',
                 }"
      >
        <div
          class="picture"
          :style="{
                         'background-image': 'url(' + pic.download_url + ')',
                         'background-position': pic.position,
                         'width': dataWidth + 'rem',
                         'height': dataHeight + 'rem',
                     }"
        ></div>

        <div class="caption" v-if="dataPolaroid">
          <span class="author" v-if="pic.author">{{ pic.author }}</span>
          <small v-if="pic.caption">{{ pic.caption }}</small>
          <small class="hide" v-if="!pic.caption">Nothing to see here</small>
        </div>
      </component>
    </template>
  </div>
</template>

<script>
import store from "../store/index";
import axios from "axios";

export default {
  name: "PicturePile",
  props: {
    src: {
      type: String,
      default: ""
    },
    polaroid: {
      type: Boolean,
      default: false
    },
    squircle: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: Boolean,
      default: true
    },
    rotate: {
      type: Number,
      default: 5
    },
    scale: {
      type: Number,
      default: 3
    },
    shadow: {
      type: Number,
      default: 20
    },
    width: {
      type: Number,
      default: 8
    },
    height: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      picturePile: []
    };
  },
  computed: {
    dataPolaroid: {
      get() {
        return store.state.dataPolaroid;
      }
    },
    dataHighlight: {
      get() {
        return store.state.dataHighlight;
      }
    },
    dataSquircle: {
      get() {
        return store.state.dataSquircle;
      }
    },
    dataRotate: {
      get() {
        return store.state.dataRotate;
      }
    },
    dataScale: {
      get() {
        return store.state.dataScale;
      }
    },
    dataShadow: {
      get() {
        let result = [
          "0 0 " + store.state.dataShadow + "px rgba(0, 0, 0, 0.5)",
          "none"
        ];

        if (!this.dataPolaroid && this.dataSquircle) {
          result = [
            "none",
            "drop-shadow(0 0 " +
              store.state.dataShadow +
              "px rgba(0, 0, 0, 0.5))"
          ];
        }

        return result;
      }
    },
    dataWidth: {
      get() {
        return store.state.dataWidth;
      }
    },
    dataHeight: {
      get() {
        return store.state.dataHeight;
      }
    },
    dataPictureSource: {
      get() {
        return store.state.dataPictureSource;
      }
    }
  },
  methods: {
    pileOfPicturesClasses: function() {
      let result = [];
      if (this.dataPolaroid) {
        result.push("polaroid");
      }
      if (this.dataSquircle) {
        result.push("squircle");
      }
      return result.join(" ");
    },
    zIndex: function(picture) {
      let result = (Math.random() * 10).toFixed();
      if (this.dataHighlight && picture.highlight) {
        result = 99;
      }
      return result;
    },
    scaleSize: function(picture) {
      let result = ((Math.random() * this.dataScale) / 10 + 1).toFixed(1);
      if (this.dataHighlight && picture.highlight) {
        result = 2;
      }
      return result;
    },
    rotateDeg: function() {
      return (
        Math.floor(Math.random() * (this.dataRotate - -this.dataRotate + 1)) +
        -this.dataRotate
      );
    },
    getPictures: function() {
      axios.get(this.dataPictureSource).then(response => {
        this.picturePile = [...response.data].slice(0, 100);
      });
    }
  },
  mounted() {
    store.dispatch("setDataPictureSource", this.src);
    store.dispatch("setDataPolaroid", this.polaroid);
    store.dispatch("setDataHighlight", this.highlight);
    store.dispatch("setDataSquircle", this.squircle);
    store.dispatch("setDataRotate", this.rotate);
    store.dispatch("setDataScale", this.scale);
    store.dispatch("setDataShadow", this.shadow);
    store.dispatch("setDataWidth", this.width);
    store.dispatch("setDataHeight", this.height);

    this.getPictures();
  }
};
</script>

<style lang="scss" scoped>
.pile-of-pictures {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  a.picture-wrapper {
    text-decoration: none;
  }

  .picture-wrapper {
    transition: width 1s, height 1s, background-color 1s, transform 1s;
    margin: 1rem;
    border-radius: 0.25rem;

    .picture {
      background-size: cover;
      padding: 1rem;
      margin: 0;
      border-radius: 0.25rem;
    }

    .caption {
      display: flex;
      flex-direction: column;
      font-size: 0.6rem;
      margin: 0.5rem 0;

      .author {
        font-size: 50%;
        font-weight: 700;
        color: #7f7f7f;
      }

      .hide {
        color: #fff;
      }
    }
  }

  &.squircle {
    .picture {
      clip-path: url(#squircle-clip);
    }
  }

  &.polaroid {
    .picture-wrapper {
      background-color: #fff;
      padding: 0.25rem 0.25rem 0;
      border: 0.02rem solid #e4e4e4;
      border-radius: 0.25rem;
    }
  }
}
</style>
