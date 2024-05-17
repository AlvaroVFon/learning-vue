<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { changeTheme } from '@/utils/changeTheme';
import CourseIcon from './icons/CourseIcon.vue';
import CategoryIcon from './icons/CategoryIcon.vue';
import LoginIcon from './icons/LoginIcon.vue';
import LogoutIcon from './icons/LogoutIcon.vue';
import LightIcon from './icons/LightIcon.vue';
import DarkIcon from './icons/DarkIcon.vue';
const handleTheme = () => {
  darkMode.value = !darkMode.value;
  changeTheme(darkMode);
};
const route = useRoute();
const currentRoute = ref(route.name);
const linkStyle = 'p-3 hover:scale-110 duration-300 ';
const darkMode = ref(false);
const session = ref(false);
</script>
<template>
  <nav class="flex items-center gap-5">
    <button
      v-if="!darkMode"
      :class="currentRoute === '/' ? 'active' : linkStyle"
      @click="handleTheme"
    >
      <LightIcon :color="darkMode ? '#42b883' : 'white'" />
    </button>
    <button
      v-if="darkMode"
      :class="linkStyle"
      @click="handleTheme"
    >
      <DarkIcon :color="darkMode ? '#42b883' : 'white'" />
    </button>
    <RouterLink to="/?page=1&perPage=10">
      <CourseIcon :color="darkMode ? '#42b883' : 'white'" />
    </RouterLink>
    <RouterLink to="/categories">
      <CategoryIcon :color="darkMode ? '#42b883' : 'white'" />
    </RouterLink>
    <RouterLink
      to="/login"
      v-if="!session"
    >
      <LoginIcon :color="darkMode ? '#42b883' : 'white'" />
    </RouterLink>
    <RouterLink
      to="/logout"
      v-if="session"
    >
      <LogoutIcon :color="darkMode ? '#42b883' : 'white'" />
    </RouterLink>
  </nav>
</template>

<style scoped></style>
