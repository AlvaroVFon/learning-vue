<script setup>
import { ref, onMounted, watch } from 'vue'
import { theme, darkTheme } from '@/config/themeConfig'
import SunIcon from '@/components/icons/SunIcon.vue'
import MoonIcon from '@/components/icons/MoonIcon.vue'

const currentTheme = ref(localStorage.getItem('theme') || theme)

onMounted(() => {
  document.documentElement.setAttribute('data-theme', currentTheme.value)
})

watch(currentTheme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
})

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === theme ? darkTheme : theme
}
</script>

<template>
  <label class="swap swap-rotate w-8 p-2 hover:text-blue-400">
    <input type="checkbox" :checked="currentTheme === darkTheme" @change="toggleTheme" />
    <SunIcon />
    <MoonIcon />
  </label>
</template>
