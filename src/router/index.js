import { createRouter, createWebHistory } from 'vue-router';
import CourseView from '@/views/CourseView.vue';
import CategoriesView from '@/views/CategoriesView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/courses?page=1&perPage=10',
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('@/views/CoursesView.vue'),
    },
    {
      path: '/courses/:id',
      name: 'course',
      component: CourseView,
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue'),
    },
  ],
});

export default router;
