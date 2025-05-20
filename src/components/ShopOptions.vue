<script setup lang="ts">
const tgsToggle = defineModel<boolean>('tgsToggle')
const filter = defineModel<string>('filter')
const props = defineProps({
  filters: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <v-checkbox
      v-model="tgsToggle"
      :label="`TGS: ${tgsToggle?.toString()}`"
  ></v-checkbox>
  <v-select
      clearable
      label="Select"
      :items="props.filters"
      v-model="filter"
  ></v-select>
</template>

<style scoped>

</style>
