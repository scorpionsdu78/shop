import type {GetterTree} from 'vuex'
import type {ItemsState, State} from '../type.ts'
import type {Item} from '../../models/item.ts'

const getters: GetterTree<ItemsState, State> = {
  getArtifact: (state: ItemsState): Item[] => state.artifact,
  getCommon: (state: ItemsState): Item[] => state.common,
  getLegendary: (state: ItemsState): Item[] => state.legendary,
  getNone: (state: ItemsState): Item[] => state.none,
  getUnknown: (state: ItemsState): Item[] => state.unknown,
  getRare: (state: ItemsState): Item[] => state.rare,
  getVeryRare: (state: ItemsState): Item[] => state.veryRare,
  getUncommon: (state: ItemsState): Item[] => state.uncommon,
}

export default getters
