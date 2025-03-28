<script setup>
import DefaultNavbar from '@/components/DefaultNavbar.vue'
import SideBar from '@/components/SideBar.vue'
import SideBarLink from '@/components/SideBarLink.vue'
import { getLinks } from '@/data/sidebarLinks.js'
const sidebarLinks = getLinks()
</script>
<template>
  <!-- Navbar -->
  <DefaultNavbar />
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle absolute top-0 left-0" />
    <div class="drawer-content flex flex-col p-10">
      <!-- Page content here -->
      <router-view />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <SideBar>
        <template v-for="link in sidebarLinks" :key="link.text">
          <SideBarLink :to="link.to" :text="$t(link.text)" :Icon="link.Icon" :onClick="link.onClick"/>
        </template>
      </SideBar>
    </div>
  </div>
</template>
