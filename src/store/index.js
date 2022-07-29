/*
* @Author: xizixin
* @Describe: State management
* @Date: 2018-06-22
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  getters: {
    getList (state) {
      return state.list
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
