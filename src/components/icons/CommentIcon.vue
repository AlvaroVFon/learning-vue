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
    class="lucide lucide-message-circle"
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
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
