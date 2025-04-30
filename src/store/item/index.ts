import type {ItemsState, State} from '../type.ts'
import type {Module} from 'vuex'
import getters from './getters.ts'
import mutations from './mutations.ts'
import actions from './actions.ts'

const state: ItemsState = {
  legendary: [],
  common: [],
  none: [],
  unknown: [],
  rare: [],
  veryRare: [],
  uncommon: [],
  artifact: [],
}

const items: Module<ItemsState, State> = {
  state,
  getters,
  mutations,
  actions
}

export default items
