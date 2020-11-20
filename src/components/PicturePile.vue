<template>
  <div
    class="pile-of-pictures"
    :class="pileOfPicturesClasses()"
  >
    <svg
      width="0"
      height="0"
    >
      <defs>
        <clipPath
          id="squircle-clip"
          clipPathUnits="objectBoundingBox"
        >
          <path d="M .5,0 C .1,0 0,.1 0,.5 0,.9 .1,1 .5,1 .9,1 1,.9 1,.5 1,.1 .9,0 .5,0 Z" />
        </clipPath>
      </defs>
    </svg>
    <template
      v-for="pic in picturePile"
    >
      <div
        v-bind:key="pic.id"
        class="picture-wrapper"
        @click="activePicture === pic ? activePicture = undefined : activePicture = pic"
        :class="activePicture === pic ? 'active' : ''"
        :style="{
          'box-shadow': dataShadow > 0 ? dataShadowCSS[0] : '',
          filter: dataShadowCSS[1],
          border: dataPolaroid && dataShadow == 0 ? '1px solid #e4e4e4' : '',
          'z-index': zIndex(pic),
          transform:
            activePicture !== pic ? 'scale(' + scaleSize(pic) + ') rotate(' + rotateDeg() + 'deg)' : ''
        }"
      >
        <img v-if="pic.download_url"
             :src=pic.download_url
             class="picture"
             alt='picture'/>

        <svg
          v-if="activePicture === pic"
          class="close_me"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          height="20px"
          width="20px"
          style="enable-background:new 0 0 24 24;"
          version="1.1"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
        </svg>

        <div
          class="caption"
          v-if="dataPolaroid"
          :style="{
            width: dataWidth + 'rem'
          }"
        >
          <div v-if="activePicture !== pic || ((activePicture !== pic) && !pic.description)">
            <div
              class="author"
              v-if="pic.author"
            >{{ pic.author }}</div>
            <small v-if="pic.quote">{{ pic.quote }}</small>
          </div>
          <div class="author__more"
               :style="activePicture === pic ? 'display: block' : ''">

            <p>
              {{ pic.description }}
            </p>

            <component
              :is="pic.ref ? 'a' : 'div'"
              :href="pic.ref"
              :target="pic.ref ? '_blank' : ''"
            >
              {{ pic.ref_text }}
            </component>
          </div>
        </div>
      </div>
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
      picturePile: [],
      activePicture: undefined
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
        return store.state.dataShadow;
      }
    },
    dataShadowCSS: {
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

  a {
    color: #007bb1;
    text-decoration: none;
    &:hover,
    &:focus {
      color: #666;
      text-decoration: none;
    }
  }

  a.author__more,
  a.picture-wrapper {
    text-decoration: none;
  }

  .picture-wrapper {
    transition: width 1s, height 1s, background-color 1s, transform 1s;
    margin: 1rem;
    border-radius: 0.25rem;

    &.active {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2001 !important;
      border: 1px solid #69be28;

      .close_me {
        position: absolute;
        cursor: pointer;
        top: 10px;
        right: 10px;
        fill: #252525;
        background: #fff;
        border-radius: 6px;
        padding: 5px;
        opacity: 0.7;
        height: 10px;
        width: 10px;
      }

      .caption {
        font-size: 16px;
        .author {
          display: none;
        }
        .author__more {
          display: block;
          text-align: left;
          padding: 0 0.5rem;
          margin: 0 0 1rem 0;
          &:hover {
            text-decoration: none;
          }
        }
      }
      .picture {
        max-width: 30rem;
      }
      .caption {
        width: 25rem !important;
      }
    }
    .picture {
      margin: 0;
      border-radius: 0.25rem;
      max-width: 15rem;
      max-height: 100vh;
      width: 100%;
    }

    .caption {
      display: flex;
      align-self: flex-end;
      flex-direction: column;
      font-size: 14px;
      font-weight: 400;
      margin: 1rem auto;

      .author,
      .author__more {
        color: #7f7f7f;
      }
      .author__more {
        display: none;
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
      border-radius: 0.25rem;
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3),
         only screen and (max-width: 640px),
         only screen and (max-device-width: 812px) and (orientation: landscape) {

    .picture-wrapper.active {
      transform: none;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: scroll;
      .picture {
        max-width: 100% !important;
      }
      .caption {
        width: auto !important;
        margin: 1rem 3rem;
        padding: 0;
        .author__more {
          padding: 0;
        }
      }
    }
  }
}
</style>
