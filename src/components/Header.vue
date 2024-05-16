<template>
  <header
    class="sticky top-0 z-10 flex p-3 items-center border-b border-muted justify-center md:justify-between w-full bg-bgSecondary"
  >
    <RouterLink
      to="/"
      class="text-white p-3"
      >WebinarWise
    </RouterLink>
    <Searchbar />
    <HeaderNav />
  </header>
</template>
<script setup>
  import HeaderNav from './HeaderNav.vue'
  import Searchbar from './Searchbar.vue'
  import { RouterLink } from 'vue-router'
</script>
<style scoped></style>
