import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginView from '@/views/LoginView.vue'
import UsersView from '@/views/UsersView.vue'
import ClientView from '@/views/ClientView.vue'
import UserView from '@/views/UserView.vue'

// TODO: protect routes
const routes = [
  { path: '/login', component: LoginView },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: 'users', component: UsersView },
      { path: 'users/:id', component: UserView },
      { path: 'clients', component: ClientView },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
