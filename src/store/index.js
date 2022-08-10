/*
* @Author: xizixin
* @Describe: State management
* @Date: 2022-08-08
*/
import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from "js-cookie"
import routerData from "./modules/routerData"
import role from "./modules/role"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: Cookies.get("token"),
    isCollapse: false,
    logoShow: false
  },
  getters: {
    token: state => state.token,
    logoShow: state => state.logoShow,
    isCollapse: state => state.isCollapse,

    routers: state => state.routerData.routers,
    addRouters: state => state.routerData.addRouters,

    info: state => state.role.info
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      Cookies.set("token", token, { expires: 1 / 24 })
    },
    collapse(state, arg) {
      state.isCollapse = !state.isCollapse
      if (state.logoShow) {
        setTimeout(function () {
          state.logoShow = false
        }, 300)
      } else {
        state.logoShow = true
      }
    }
  },
  actions: {
    setToken({ commit }, token) {
      return new Promise((resolve, reject) => {
        commit("setToken", token)
        resolve()
      })
    },
    collapse({ commit }, arg) {
      commit("collapse", arg)
    }
  },
  modules: {
    routerData,
    role
  }
})
