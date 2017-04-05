import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from '../types'

const state = {
  count: 0
}

const mutations = {
  // Increment Counter
  [COUNTER_INCREMENT] (state, payload) {
    state.count += payload.amount
  },

  // Decrement counter
  [COUNTER_DECREMENT] (state, payload) {
    state.count -= payload.amount
  }
}

const getters = {
  counter: ({ counter }) => state.count
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
