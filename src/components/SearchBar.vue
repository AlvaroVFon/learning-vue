<script setup>
import { ref } from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import { getSearchFilters } from '@/data/searchFilters'
const searchFilters = ref(getSearchFilters())
</script>
<template>
  <label class="input">
    <SearchIcon />
    <input type="search" class="grow" placeholder="Search" />
  </label>
  <select class="select">
    <option disabled selected>Pick a color</option>
    <option v-for="filter in searchFilters" :key="filter.label" :value="filter.value">
      {{ filter.label }}
    </option>
    <option>Amber</option>
    <option>Velvet</option>
  </select>
</template>
