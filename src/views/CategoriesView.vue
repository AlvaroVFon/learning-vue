<template>
  <GridWrapper>
    <template
      v-for="categorie in categories"
      :key="categorie.id"
    >
      <CategoryCard :categorie="categorie" />
    </template>
  </GridWrapper>
</template>
<script setup>
  import { ref, onMounted } from 'vue'
  import GridWrapper from '@/components/GridWrapper.vue'
  import CategoryCard from '@/components/CategoryCard.vue'
  import api from '@/utils/WebinarApi'

  const categories = ref([])
  const loading = ref(false)
  const error = ref(null)

  const getCategories = async () => {
    const response = await api.getCategories()
    categories.value = response
  }
  onMounted(() => {
    getCategories()
  })
</script>

<style scoped></style>
