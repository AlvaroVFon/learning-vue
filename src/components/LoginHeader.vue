<script setup>
import ThemeController from '@/components/ThemeController.vue'
import LanguageController from '@/components/LanguageController.vue'
defineProps({
  title: {
    type: String,
    default: 'CMS - Identity Manager',
  },
})
</script>

<template>
  <header class="w-full h-16 flex justify-between items-center bg-base-200 p-3">
    <span></span>
    <h1 class="text-lg uppercase font-bold">{{ title }}</h1>
    <div class="flex gap-4">
      <LanguageController />
      <ThemeController />
    </div>
  </header>
</template>
