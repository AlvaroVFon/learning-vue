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
    class="lucide lucide-credit-card"
  >
    <rect
      width="20"
      height="14"
      x="2"
      y="5"
      rx="2"
    />
    <line
      x1="2"
      x2="22"
      y1="10"
      y2="10"
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
