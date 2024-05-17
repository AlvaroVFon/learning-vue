<template>
  <form
    class="flex items-center sm:flex sm:max-w-sm md:max-w-lg max-w-2xl w-full"
    @submit="handleSubmit"
  >
    <input
      type="text"
      :class="searchBarStyle"
      @input="handleSearch"
      class="w-full p-2 rounded border bg-bgPrimary border-muted hover:border-accent text-accent duration-300"
    />
    <span class="p-3">
      <SearchIcon color="#42b883" />
    </span>
  </form>
</template>
<script setup>
import SearchIcon from './icons/SearchIcon.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const handleSearch = (e) => {
  router.replace({
    name: 'home',
    query: { page: 1, perPage: 10, search: e.target.value },
  });
};
</script>

<style scoped></style>
