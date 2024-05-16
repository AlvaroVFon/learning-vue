<template>
  <h1>Hello from Courses Page</h1>
  <div
    class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 gap-y-10 place-items-center p-6"
  >
    <template
      v-for="course in courses"
      :key="course.id"
    >
      <CourseCard :course="course" />
    </template>
  </div>
</template>
<script setup>
  import CourseCard from '../components/CourseCard.vue'
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
