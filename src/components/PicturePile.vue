<template>
  <div class="hello">

    <h1>{{ msg }}</h1>

    <div class="props">
      <div>
        <label for="polaroid">Polaroids</label>
        <input id="polaroid" type="checkbox" v-model="polaroid"/>
      </div>
      <div>
        <label for="highlight">Highlights</label>
        <input id="highlight" type="checkbox" v-model="highlight"/>
      </div>
      <div>
        <label for="rotate">Rotate</label>
        <input id="rotate" type="number" v-model="rotate"/>
      </div>
      <div>
        <label for="scale">Scale</label>
        <input id="scale" type="number" v-model="scale"/>
      </div>
      <div>
        <label for="width">Width</label>
        <input id="width" type="number" v-model="width"/>
      </div>
      <div>
        <label for="height">Height</label>
        <input id="height" type="number" v-model="height"/>
      </div>
    </div>

    <div class="pile-of-pictures" :class="polaroid ? 'polaroid': ''">
      <template v-for="pic in picturePile">
        <div class="picture-wrapper"
             v-bind:key="pic.id"
             :style="{
                 'z-index': zIndex(pic),
                 'transform': 'scale(' + scaleSize(pic) + ') rotate(' + rotateDeg() + 'deg)',
             }">
            <div class="picture"
               :style="{
                'background-image': 'url(' + pic.download_url + ')',
                'width': width + 'rem',
                'height': height + 'rem',
             }">
          </div>
          <div class="caption" v-if="polaroid">
            <small v-if="pic.caption">{{ pic.caption }}</small>
            <small class="hide" v-if="!pic.caption">Nothing to see here</small>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PicturePile",
  props: {
    polaroid: Boolean,
    highlight: {
      type: Boolean,
      default: true
    },
    rotate: {
      type: Number,
      default: 5,
    },
    scale: {
      type: Number,
      default: 3,
    },
    width: {
      type: Number,
      default: 8,
    },
    height: {
      type: Number,
      default: 6,
    },
    msg: String,
  },
  data() {
    return {
      picturePile: [],
    };
  },
  methods: {
    zIndex: function (picture) {
      let result = (Math.random() * 10).toFixed()
      if (this.highlight && picture.highlight) {
        result = 99
      }
      return result
    },
    scaleSize: function (picture) {
      let result = (Math.random() * this.scale/10 + 1).toFixed(1)
      if (this.highlight && picture.highlight) {
        result = 2
      }
      return result
    },
    rotateDeg: function() {
      return (Math.floor(Math.random() * (this.rotate - -this.rotate + 1)) + -this.rotate)
    }
  },
  computed: {
    randScale: function() {
      return (Math.random() * 2).toFixed(1)
    }
  },
  mounted() {
    // axios.get("https://picsum.photos/v2/list")
    axios.get("pictures.json")
      .then(response => {
         this.picturePile = [...response.data].slice(0, 100)
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .props {
    display: flex;
    justify-content: space-around;
  }
  .pile-of-pictures {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .picture-wrapper {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      margin: 1rem;
      border-radius: .25rem;
      .picture {
        background-size: cover;
        padding: 1rem;
        margin: 0;
        border-radius: .25rem;
      }
      .caption {
        font-size: .6rem;
        margin: .5rem 0;
        .hide {
          color: #fff;
        }
      }
    }

    &.polaroid {
      .picture-wrapper {
        background-color: #fff;
        padding: .25rem .25rem 0;
        border: .02rem solid #e4e4e4;
        border-radius: .25rem;
      }
    }

  }
</style>
