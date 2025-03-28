<script setup>
defineProps({
  to: { type: String, default: '#' },
  Icon: Object,
  text: { type: String, default: 'SideBar Link' },
  onClick: Function
})
</script>
<template>
  <li>
    <RouterLink :to="to" class="flex justify-between hover:text-primary duration-300" @click="onClick"
      >{{ text }}<component :is="Icon" class="h-6 w-6" />
    </RouterLink>
  </li>
</template>
