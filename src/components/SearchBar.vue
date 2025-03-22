<script setup>
import { ref } from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import { getUsersFilters } from '@/data/searchFilters'
const searchFilters = ref(getUsersFilters())
</script>
<template>
  <div class="flex gap-2">
    <label class="input">
      <SearchIcon />
      <input type="search" class="grow" placeholder="Search" />
    </label>
    <select class="select">
      <option
        v-for="filter in searchFilters"
        :key="filter.label"
        :value="filter.value"
        :selected="filter.selected"
      >
        {{ filter.label }}
      </option>
    </select>
  </div>
</template>
