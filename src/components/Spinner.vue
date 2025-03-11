<script setup>
defineProps({
  loading: Boolean,
})
</script>
<template>
  <span v-if="loading" class="loading loading-spinner"> </span>
</template>
