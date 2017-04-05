import Vue from 'vue'
import * as types from './types'

/**
 * Counter
 */
export const incrementCounter = ({ commit }) => {
  console.debug('[Vuex] - Action - incrementCounter')
  commit(types.NAMESPACE_COUNTER + '/' + types.COUNTER_INCREMENT, { amount: 1 })
}

export const decrementCounter = ({ commit }) => {
  console.debug('[Vuex] - Action - decrementCounter')
  commit(types.NAMESPACE_COUNTER + '/' + types.COUNTER_DECREMENT, { amount: 1 })
}

export const incrementCounterBy = ({ commit }, amount) => {
  console.debug('[Vuex] - Action - incrementCounterBy')
  commit(types.NAMESPACE_COUNTER + '/' + types.COUNTER_INCREMENT, { amount: amount })
}

export const decrementCounterBy = ({ commit }, amount) => {
  console.debug('[Vuex] - Action - decrementCounterBy')
  commit(types.NAMESPACE_COUNTER + '/' + types.COUNTER_DECREMENT, { amount: amount })
}
/** /counter **/
