import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import productCard from './modules/productCard'
import listedProducts from './modules/listedProducts'

const store = new Vuex.Store({
  modules: {
    productCard,
    listedProducts,
  },
})

export default store
