import type {GetterTree} from 'vuex'
import type { ItemsTgsState, State } from '../type.ts'
import type {Item} from '../../models/item.ts'

const getters: GetterTree<ItemsTgsState, State> = {
  getTgsArtifact: (state: ItemsTgsState): Item[] => state.artifact,
  getTgsCommon: (state: ItemsTgsState): Item[] => state.common,
  getTgsLegendary: (state: ItemsTgsState): Item[] => state.legendary,
  getTgsRare: (state: ItemsTgsState): Item[] => state.rare,
  getTgsVeryRare: (state: ItemsTgsState): Item[] => state.veryRare,
  getTgsUncommon: (state: ItemsTgsState): Item[] => state.uncommon,
}

export default getters
