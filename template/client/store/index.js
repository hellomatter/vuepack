import Vue from 'vue'
import Vuex from 'vuex'

import plugins from './plugins'
import * as actions from './actions'

// Modules
import counter from './modules/counter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    counter
  },
  actions,
  debug,
  strict: debug,
  plugins
})

export default store
