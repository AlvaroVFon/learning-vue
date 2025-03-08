<script setup>
defineProps(['headers'])
</script>
<template>
  <tr>
    <th v-for="header in headers" :key="header.key">{{ $t(header) }}</th>
  </tr>
</template>
