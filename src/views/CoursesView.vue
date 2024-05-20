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
  <Pagination :totalPages="totalPages" />
</template>
<script setup>
import CourseCard from '@/components/CourseCard.vue';
import GridWrapper from '@/components/GridWrapper.vue';
import Pagination from '@/components/Pagination.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/utils/WebinarApi';

const route = useRoute();
const courses = ref([]);
const error = ref(null);
const isLoading = ref(false);
const totalPages = ref(0);
const getCourses = async (url) => {
  isLoading.value = true;
  const response = await api.getCourses(url);
  courses.value = response.results;
  totalPages.value = response.totalPages;
};
onMounted(() => {
  getCourses(route.fullPath);
});
watch(route, () => {
  getCourses(route.fullPath);
});
</script>
