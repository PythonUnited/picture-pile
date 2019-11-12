import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packageVersion: process.env.PACKAGE_VERSION || '',
    dataPolaroid: false,
    dataHighlight: false,
    dataSquircle: false,
    dataRotate: 5,
    dataScale: 3,
    dataShadow: 20,
    dataWidth: 8,
    dataHeight: 6,
    dataPictureSource: "",
  },
  getters: {
    appVersion: (state) => {
      return state.packageVersion
    },
    dataPolaroid: state => {
      return state.dataPolaroid
    },
    dataSquircle: state => {
      return state.dataSquircle
    },
    dataHighlight: state => {
      return state.dataHighlight
    },
    dataRotate: state => {
      return state.dataRotate
    },
    dataScale: state => {
      return state.dataScale
    },
    dataShadow: state => {
      return state.dataSShadow
    },
    dataWidth: state => {
      return state.dataWidth
    },
    dataHeight: state => {
      return state.dataHeight
    },
    dataPictureSource: state => {
      return state.dataPictureSource
    }
  },
  mutations: {
    SET_DATA_POLAROID: (state, newValue) => {
      state.dataPolaroid = newValue
    },
    SET_DATA_HIGHLIGHT: (state, newValue) => {
      state.dataHighlight = newValue
    },
    SET_DATA_SQUIRCLE: (state, newValue) => {
      state.dataSquircle = newValue
    },
    SET_DATA_ROTATE: (state, newValue) => {
      state.dataRotate = newValue
    },
    SET_DATA_SCALE: (state, newValue) => {
      state.dataScale = newValue
    },
    SET_DATA_SHADOW: (state, newValue) => {
      state.dataShadow = newValue
    },
    SET_DATA_WIDTH: (state, newValue) => {
      state.dataWidth = newValue
    },
    SET_DATA_HEIGHT: (state, newValue) => {
      state.dataHeight = newValue
    },
    SET_DATA_PICTURE_SOURCE: (state, newValue) => {
      state.dataPictureSource = newValue
    }
  },
  actions: {
    setDataPolaroid: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_POLAROID', newValue)
      return state.dataPolaroid
    },
    setDataHighlight: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_HIGHLIGHT', newValue)
      return state.dataHighlight
    },
    setDataSquircle: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_SQUIRCLE', newValue)
      return state.dataSquircle
    },
    setDataRotate: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_ROTATE', newValue)
      return state.dataRotate
    },
    setDataScale: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_SCALE', newValue)
      return state.dataScale
    },
    setDataShadow: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_SHADOW', newValue)
      return state.dataShadow
    },
    setDataWidth: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_WIDTH', newValue)
      return state.dataWidth
    },
    setDataHeight: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_HEIGHT', newValue)
      return state.dataHeight
    },
    setDataPictureSource: ({
      commit,
      state
    }, newValue) => {
      commit('SET_DATA_PICTURE_SOURCE', newValue)
      return state.dataPictureSource
    }
  },
  modules: {}
})