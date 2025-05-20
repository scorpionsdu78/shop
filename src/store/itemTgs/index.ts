import type {ItemsTgsState, State} from '../type.ts'
import type {Module} from 'vuex'
import getters from './getters.ts'
import mutations from './mutations.ts'
import actions from './actions.ts'

const state: ItemsTgsState = {
  legendary: [],
  common: [],
  rare: [],
  veryRare: [],
  uncommon: [],
  artifact: [],
}

const items: Module<ItemsTgsState, State> = {
  state,
  getters,
  mutations,
  actions
}

export default items
