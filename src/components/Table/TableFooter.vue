<script setup>
import MainPagination from '@/components/Pagination.vue'
</script>

<template>
  <MainPagination
    :total="total"
    :pageSize="pageSize"
    :onPageChange="onPageChange"
    :currentPage="currentPage"
    :prevPage="prevPage"
    :nextPage="nextPage"
  />
</template>
