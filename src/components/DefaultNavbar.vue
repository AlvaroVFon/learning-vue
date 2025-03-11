<script setup>
import LanguageController from '@/components/LanguageController.vue'
import Themecontroller from '@/components/ThemeController.vue'
import NavbarItemGroup from '@/components/NavbarItemGroup.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'
import { useLogin } from '@/composables/useLogin'
const { logout, user } = useLogin()
</script>
<template>
  <div class="navbar bg-base-300 w-full flex items-center">
    <div class="flex-none lg:hidden">
      <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-6 w-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>
    <div class="hidden lg:flex justify-between items-center w-full px-2">
      <!-- Navbar menu content here -->
      <div class="flex gap-2 items-center">
        <div class="mx-2 px-2">CM -IM</div>
        <p class="badge badge-info">{{ user.email }}</p>
      </div>

      <NavbarItemGroup>
        <li>
          <!--TODO: import from .env -->
          <span class="badge badge-accent uppercase font-bold">Local</span>
        </li>
        <li><LanguageController /></li>
        <li><Themecontroller /></li>
        <li>
          <button class="p-2 hover:text-red-400" @click="logout">
            <LogoutIcon />
          </button>
        </li>
      </NavbarItemGroup>
    </div>
  </div>
</template>
