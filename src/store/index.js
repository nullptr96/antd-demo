//基础模板
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    
  //由于容易变得臃肿，使用module分割
  modules: {
    user,  
  },
  state: {

  },
  mutations: {

  },
  actions: {
  },
  getters
})
