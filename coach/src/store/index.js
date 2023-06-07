import { createStore } from "vuex"
import rootGetters from "./getters.js"
import rootMutations from "./mutations.js"
import rootActions from "./actions.js"

createStore({
  state() {
    return {
      coaches: []
    }
  },
  rootGetters,
  rootMutations,
  rootActions
})