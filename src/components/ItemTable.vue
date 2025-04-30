<script setup lang="ts">
import {Item} from '../models/item'

defineProps<{ items: Item[] }>()
</script>

<template>

    <div v-for="item in items" :key="item.name">
      <div style="margin-top: 10px">
        <v-card :title="item.name" :subtitle="item.rarity" :text="item.entries?.toString()" :variant="'outlined'"/>
      </div>
    </div>

</template>

<style scoped>

</style>
