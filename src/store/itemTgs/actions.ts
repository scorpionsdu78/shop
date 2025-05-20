import type {ActionTree} from 'vuex'
import type {ItemsState, State} from '../type.ts'
import ItemService from '../../services/itemService.ts'

const actions: ActionTree<ItemsState, State> = {
  async fetchAllTgsItems({ commit }) {
    const itemsLegendary = await ItemService.getTgsLegendaryItem()
    const itemsCommon = await ItemService.getTgsCommonItem()
    const itemRare = await ItemService.getTgsRareItem()
    const itemsUncommon = await ItemService.getTgsUncommonItem()
    const itemsVeryRare = await ItemService.getTgsVeryRareItem()
    const itemsArtifact = await ItemService.getTgsArtifactItem()
    commit('setTgsCommon', itemsCommon)
    commit('setTgsLegendary', itemsLegendary)
    commit('setTgsRare', itemRare)
    commit('setTgsUncommon', itemsUncommon)
    commit('setTgsVeryRare', itemsVeryRare)
    commit('setTgsArtifact', itemsArtifact)
  }
}
export default actions
