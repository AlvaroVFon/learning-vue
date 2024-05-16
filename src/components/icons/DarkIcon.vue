<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-moon"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
</template>
<script setup>
  defineProps({
    color: {
      type: String,
      default: 'white',
    },
    width: {
      type: String,
      default: '25',
    },
    height: {
      type: String,
      default: '25',
    },
  })
</script>

<style scoped></style>
