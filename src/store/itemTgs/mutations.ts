import type {MutationTree} from 'vuex'
import type {ItemsTgsState} from '../type.ts'
import type {Item} from '../../models/item.ts'

const mutations: MutationTree<ItemsTgsState> = {
  setTgsLegendary(state: ItemsTgsState, payload: Item[]) {
    state.legendary = payload
  },
  setTgsCommon(state: ItemsTgsState, payload: Item[]) {
    state.common = payload
  },
  setTgsRare(state: ItemsTgsState, payload: Item[]) {
    state.rare = payload
  },
  setTgsVeryRare(state: ItemsTgsState, payload: Item[]) {
    state.veryRare = payload
  },
  setTgsUncommon(state: ItemsTgsState, payload: Item[]) {
    state.uncommon = payload
  },
  setTgsArtifact(state: ItemsTgsState, payload: Item[]) {
    state.artifact = payload
  },
}

export default mutations
