import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  getters: {
    isLoggedIn (state) {
      return state.loggedIn
    }
  },
  actions: {
    login ({ state }, emailId) {
      if (emailId !== undefined) {
        // console.log('########hloo undefined')
        localStorage.setItem('userId', emailId)
        state.loggedIn = true
      } else if (localStorage.getItem('userId') !== null) {
        // console.log('####hloooooo getnull')
        state.loggedIn = true
      }
      // console.log('logging in')
    },
    logout ({ state }) {
      localStorage.removeItem('userId')
      state.loggedIn = false
    }
  }
})
