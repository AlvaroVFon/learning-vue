<template>
  <input
    :type="type"
    :name="name"
    :id="id"
    :class="compFunction === 'searchbar' ? searchBarStyle : inputStyle"
    @input="handleSearch"
  />
</template>
<script setup>
  defineProps({
    type: {
      type: String,
      default: 'text',
      required: true,
    },
    compFunction: {
      type: String,
      default: 'searchbar',
      required: true,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    id: {
      type: String,
      default: '',
      required: false,
    },
  })
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const searchBarStyle =
    'hidden sm:flex sm:max-w-sm md:max-w-lg max-w-2xl rounded-lg p-2 placeholder:p-2 bg-bgPrimary border border-muted text-accent placeholder-muted hover:border-accent hover:bg-bgTertiary focus:bg-bgTertiary w-full duration-300'
  const inputStyle =
    'bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full'

  const handleSearch = (e) => {
    router.push({ name: 'home', query: { title: e.target.value } })
  }
</script>
