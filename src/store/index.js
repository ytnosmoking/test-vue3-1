import { createStore } from 'vuex'





export const store = createStore({
  state: {
    isLogin: false,
    arrs: []
  },
  getters: {
    total(state) {
      return state.arrs
    }
  },
  mutations: {
    incremet(state) {
      state.arrs.push(state.arrs.length)
    },
    incremetWithPay(state, payload) {
      console.log(payload)
      state.arrs.push(payload)
    }
  },
  actions: {
    asyncIncremet(context, time) {
      setTimeout(() => {
        context.commit('incremet')
      }, time)
    },
    asyncIncremetPay(context, info) {
      setTimeout(() => {
        context.commit('incremetWithPay', info.payload || 1)
      }, info.time || 1000)
    }
  }
})

