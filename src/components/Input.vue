<template>
  <input
    :type="type"
    :name="name"
    :v-model="vModel"
    :id="id"
    :class="compFunction === 'searchbar' ? searchBarStyle : inputStyle"
    @input="compFunction === 'searchbar' ? handleSearch : () => {}"
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
    vModel: {
      type: String,
      default: '',
      required: false,
    },
  })
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const inputStyle =

  const handleSearch = (e) => {
    router.push({ name: 'home', query: { title: e.target.value } })
  }
</script>
