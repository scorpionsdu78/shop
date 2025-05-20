// src/store/index.ts';
import { createStore } from 'vuex';
import type {ItemsState, ItemsTgsState, State} from './type.ts'
import item from './item'
import itemTgs from './itemTgs'


// Création du store avec typings
const store = createStore<State>({
  modules: {
    item,
    itemTgs
  }
});

export default store;
