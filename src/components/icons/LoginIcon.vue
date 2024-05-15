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
    class="lucide lucide-log-in"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line
      x1="15"
      x2="3"
      y1="12"
      y2="12"
    />
  </svg>
</template>

<style scoped></style>
