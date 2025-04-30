import type {ActionTree} from 'vuex'
import type {ItemsState, State} from '../type.ts'
import ItemService from '../../services/itemService.ts'

const actions: ActionTree<ItemsState, State> = {
  async fetchAllItems({ commit }) {
    const itemsLegendary = await ItemService.getLegendaryItem()
    const itemsCommon = await ItemService.getCommonItem()
    const itemsNone = await ItemService.getNoneItem()
    const itemRare = await ItemService.getRareItem()
    const itemsUncommon = await ItemService.getUncommonItem()
    const itemsVeryRare = await ItemService.getVeryRareItem()
    const itemsArtifact = await ItemService.getArtifactItem()
    commit('setCommon', itemsCommon)
    commit('setLegendary', itemsLegendary)
    commit('setNone', itemsNone)
    commit('setRare', itemRare)
    commit('setUncommon', itemsUncommon)
    commit('setVeryRare', itemsVeryRare)
    commit('setArtifact', itemsArtifact)
  }
}
export default actions
