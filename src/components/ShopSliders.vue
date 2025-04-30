<script setup lang="ts">
import {ref} from 'vue'

defineProps<{isAble: boolean}>()

const common = defineModel<number>('common')
const uncommon = defineModel<number>('uncommon')
const rare = defineModel<number>('rare')
const veryRare = defineModel<number>('veryRare')
const legendary = defineModel<number>('legendary')
const artifact = defineModel<number>('artifact')
const none = defineModel<number>('none')
const unknown = defineModel<number>('unknown')


</script>

<template>
  <div class="shop-sliders" v-if="isAble">
    <v-slider
        v-model="common"
        color="#607D8B"
        label="common"
        thumb-label
        step="1"
    ></v-slider>
    <v-slider
        v-model="uncommon"
        color="#4CAF50"
        label="uncommon"
        thumb-label
        step="1"
    ></v-slider>
    <v-slider color="#00BCD4"
              v-model="rare"
              label="rare"
              thumb-label
              step="1"
    ></v-slider>
    <v-slider
        color="#673AB7"
        v-model="veryRare"
        label="veryRare"
        thumb-label
        step="1"></v-slider>
    <v-slider
        color="#FF9800"
        v-model="legendary"
        label="legendary"
        thumb-label
        step="1"></v-slider>
    <v-slider
        color="#FFEB3B"
        v-model="artifact"
        label="artifact"
        thumb-label
        step="1"
    ></v-slider>
    <v-slider
        color="#E91E63"
        v-model="none"
        label="none"
        thumb-label
        step="1"
    ></v-slider>
    <v-slider
        color="#E91E63"
        v-model="unknown"
        label="unknown"
        thumb-label
        step="1"
    ></v-slider>
  </div>

</template>

<style scoped>

</style>
