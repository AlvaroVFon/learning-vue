<template>
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
  import api from '@/utils/WebinarApi'

  const courses = ref([])
  const error = ref(null)
  const isLoading = ref(false)

  const getCourses = async () => {
    isLoading.value = true
    const response = await api.getCourses()
    courses.value = response
  }
  onMounted(() => {
    getCourses()
  })
</script>
