<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-search"
  >
    <circle
      cx="11"
      cy="11"
      r="8"
    />
    <path d="m21 21-4.3-4.3" />
  </svg>
</template>
<script setup>
defineProps({
  size: {
    type: Number,
    default: 25,
  },
  color: {
    type: String,
    default: 'white',
  },
});
</script>
