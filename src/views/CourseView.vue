<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col items-start gap-6">
      <h1 class="text-primary text-3xl mt-3 font-bold">{{ course.name }}</h1>
      <RouterLink
        to="/"
        class="border border-muted text-accentDarker p-1 rounded-md hover:text-accent hover:border-accent duration-300 hover:bg-bgTertiary"
      >
        #{{ course.category.name }}
      </RouterLink>

      <img
        src="https://placehold.jp/42b883/ffffff/920x600.png"
        alt="course image"
        width="920"
        height="600"
        class="rounded-lg"
      />
    </div>
  </div>
</template>
<script setup>
import api from '@/utils/WebinarApi';
import { useRoute, RouterLink } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const course = ref(null);

const getCourse = async (url) => {
  const response = await api.getCourses(url);
  course.value = response;
};

getCourse(route.fullPath);
</script>

<style scoped></style>
