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
    class="lucide lucide-link-2"
  >
    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    <line
      x1="8"
      x2="16"
      y1="12"
      y2="12"
    />
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
