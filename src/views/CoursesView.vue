<template>
  <h1>{{ queryParam }}</h1>
  <GridWrapper>
    <template
      v-for="course in courses"
      :key="course.id"
    >
      <CourseCard :course="course" />
    </template>
  </GridWrapper>
</template>
<script setup>
  import CourseCard from '../components/CourseCard.vue'
  import GridWrapper from '../components/GridWrapper.vue'
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import api from '@/utils/WebinarApi'

  const route = useRoute()
  const courses = ref([])
  const error = ref(null)
  const isLoading = ref(false)
  const url = ref(route.fullPath)
  const getCourses = async (url) => {
    isLoading.value = true
    const response = await api.getCourses(url)
    courses.value = response
  }
  onMounted(() => {
    getCourses(url.value)
  })
</script>
