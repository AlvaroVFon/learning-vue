<template>
  <form class="flex sm:flex sm:max-w-sm md:max-w-lg max-w-2xl w-full">
    <input
      type="text"
      :class="searchBarStyle"
      @input="handleSearch"
      class="w-full p-2 rounded border bg-bgPrimary border-muted"
    />
  </form>
</template>
<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const handleSearch = (e) => {
    router.replace({
      name: 'home',
      query: { page: 1, perPage: 10, search: e.target.value },
    })
  }
</script>

<style scoped></style>
