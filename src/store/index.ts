// src/store/index.ts';
import { createStore } from 'vuex';
import type {State} from './type.ts'
import item from './item'

const state: State = {
  artifact: [],
  common: [],
  legendary: [],
  none: [],
  unknown: [],
  rare: [],
  veryRare: [],
  uncommon: [],
}

// Création du store avec typings
const store = createStore<State>({
  state,
  modules: {
    item
  }
});

export default store;
