import Vue from 'vue'
import Vuex from 'vuex'
import dong1 from './dong1'
import dong2 from './dong2'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dong1,
    dong2,
  }
})
export default store