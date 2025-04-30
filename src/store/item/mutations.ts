import type {MutationTree} from 'vuex'
import type {ItemsState, State} from '../type.ts'
import type {Item} from '../../models/item.ts'

const mutations: MutationTree<ItemsState> = {
  setLegendary(state: State, payload: Item[]) {
    state.legendary = payload
  },
  setCommon(state: State, payload: Item[]) {
    state.common = payload
  },
  setNone(state: State, payload: Item[]) {
    state.none = payload
  },
  setUnknown(state: State, payload: Item[]) {
    state.unknown = payload
  },
  setRare(state: State, payload: Item[]) {
    state.rare = payload
  },
  setVeryRare(state: State, payload: Item[]) {
    state.veryRare = payload
  },
  setUncommon(state: State, payload: Item[]) {
    state.uncommon = payload
  },
  setArtifact(state: State, payload: Item[]) {
    state.artifact = payload
  },
}

export default mutations
