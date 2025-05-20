import type {MutationTree} from 'vuex'
import type {ItemsState} from '../type.ts'
import type {Item} from '../../models/item.ts'

const mutations: MutationTree<ItemsState> = {
  setLegendary(state: ItemsState, payload: Item[]) {
    state.legendary = payload
  },
  setCommon(state: ItemsState, payload: Item[]) {
    state.common = payload
  },
  setNone(state: ItemsState, payload: Item[]) {
    state.none = payload
  },
  setUnknown(state: ItemsState, payload: Item[]) {
    state.unknown = payload
  },
  setRare(state: ItemsState, payload: Item[]) {
    state.rare = payload
  },
  setVeryRare(state: ItemsState, payload: Item[]) {
    state.veryRare = payload
  },
  setUncommon(state: ItemsState, payload: Item[]) {
    state.uncommon = payload
  },
  setArtifact(state: ItemsState, payload: Item[]) {
    state.artifact = payload
  },
}

export default mutations
