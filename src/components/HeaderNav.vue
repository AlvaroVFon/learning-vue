<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import CourseIcon from './icons/CourseIcon.vue'
import CategoryIcon from './icons/CategoryIcon.vue'
import LoginIcon from './icons/LoginIcon.vue'
import LogoutIcon from './icons/LogoutIcon.vue'

const route = useRoute()
const currentRoute = ref(route.name)
const linkStyle = 'p-3 hover:scale-110 duration-300 '
const session = ref(false)
</script>
<template>
  <nav class="flex items-center gap-3">
    <RouterLink
      to="/"
      :class="currentRoute === '/' ? 'active' : linkStyle"
    >
      <CourseIcon />
    </RouterLink>
    <RouterLink
      to="/categories"
      :class="currentRoute === '/categories' ? 'active' : linkStyle"
    >
      <CategoryIcon />
    </RouterLink>
    <RouterLink
      to="/login"
      :class="linkStyle"
      v-if="!session"
    >
      <LoginIcon />
    </RouterLink>
    <RouterLink
      to="/logout"
      :class="linkStyle"
      v-if="session"
    >
      <LogoutIcon />
    </RouterLink>
  </nav>
</template>

<style scoped>
.active {
  padding: 10px;
  background-color: #f3f4f6;
}
</style>
