<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
  >
    <path
      :fill="color"
      d="M7 18q-.425 0-.712-.288T6 17V7q0-.425.288-.712T7 6t.713.288T8 7v10q0 .425-.288.713T7 18m6.8-6l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T11.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
    />
  </svg>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: '#000000',
  },
  size: {
    type: String,
    default: '25',
  },
});
</script>
