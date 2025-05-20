<script setup lang="ts">
import { useStore } from 'vuex';
import {computed, ref} from 'vue'
import ItemTable from '../components/ItemTable.vue'
import type {Item} from '../models/item.ts'
import ShopSliders from '../components/ShopSliders.vue'
import ShopOptions from '../components/ShopOptions.vue'

const store = useStore();

const common = ref(0)
const uncommon = ref(0)
const rare = ref(0)
const veryRare = ref(0)
const legendary = ref(0)
const artifact = ref(0)
const none = ref(0)
const unknown = ref(0)
const shops = ref(false)
const shopItems = ref([] as Item[])
const tgsToggle = ref(false)
const filterSelected = ref('')

const filters = [
  {
    title: 'Potion',
    value: (item: Item): boolean => item?.type === 'P'
  },
  {
    title: 'armorer',
    value: (item: Item): boolean => item?.type?.includes('A') || false
  },
  {
    title: 'Black smith',
    value: (item: Item): boolean => item?.type === 'M'
        || item?.type?.includes('HA')
        || item?.type?.includes('MA')
        || false
  }
]
// Computed states
const items = computed(() => store.getters.getLegendary);
// Methods to trigger actions/mutations
const fetchAll = () => {
  store.dispatch('fetchAllItems');
  store.dispatch('fetchAllTgsItems');
}

const createShop = () => {
  shops.value = true
  shopItems.value = getRandomUniqueElements(store.getters.getCommon
          .concat(tgsToggle ? store.getters.getTgsCommon : []),
      common.value)
      .concat(getRandomUniqueElements(store.getters.getLegendary
          .concat(tgsToggle ? store.getters.getTgsLegendary : []),
          legendary.value))
      .concat(getRandomUniqueElements(store.getters.getRare
          .concat(tgsToggle ? store.getters.getTgsRare : []),
          rare.value))
      .concat(getRandomUniqueElements(store.getters.getVeryRare
              .concat(tgsToggle ? store.getters.getTgsVeryRare : []),
          veryRare.value))
      .concat(getRandomUniqueElements(store.getters.getArtifact
          .concat(tgsToggle ? store.getters.getTgsArtifact : []),
          artifact.value));
}

const getRandomUniqueElements = (array: Item[], numberOfElements: number) : Item[] => {
  // Vérifie si le nombre d'éléments demandé est valide
  if (numberOfElements > array.length) {
    throw new Error("Le nombre d'éléments demandé est supérieur à la taille du tableau");
  }

  // Crée une copie du tableau original pour ne pas le modifier
  let copyArray = [...array];
  const result = [];

  if(filterSelected.value !== ''){
   copyArray = copyArray
       .filter(item => filters
           .find(filter => filter.title === filterSelected.value)
           ?.value(item)
       )
  }

  // Sélectionne X éléments aléatoires
  for (let i = 0; i < numberOfElements; i++) {
    // Génère un index aléatoire basé sur la taille du tableau restant
    const randomIndex = Math.floor(Math.random() * copyArray.length);
    // Ajoute l'élément au résultat et le retire du tableau copié
    result.push(copyArray.splice(randomIndex, 1)[0]);
  }

  return result;
}


</script>

<template>
  <div v-if="!shops">
    <div style="padding: 1em">
      <button @click="fetchAll">Fetch all items</button>
    </div>
    <div v-if="items.length > 0">
      <ShopOptions v-model:tgs-toggle="tgsToggle" :filters="filters.map(item => item.title)" v-model:filter="filterSelected"/>
      <ShopSliders :is-able="items.length > 0"
                   v-model:artifact="artifact"
                   v-model:common="common"
                   v-model:legendary="legendary"
                   v-model:very-rare="veryRare"
                   v-model:uncommon="uncommon"
                   v-model:none="none"
                   v-model:rare="rare"
                   v-model:unknown="unknown"
      />
    </div>
    <div style="padding: 1em">
      <button @click="createShop">create shops</button>
    </div>
  </div>
  <div v-else>
    <ItemTable :items="shopItems" />
  </div>
</template>

<style>
</style>
