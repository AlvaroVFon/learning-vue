<script setup>
import { clients, headers } from '../mocks/clients.js'
import TableWrapper from '@/components/Table/TableWrapper.vue'
import TableHeader from '@/components/Table/TableHeader.vue'
import TableRow from '@/components/Table/TableRow.vue'
import MainPagination from '@/components/MainPagination.vue'
</script>
<template>
  <TableWrapper>
    <template #header>
      <TableHeader :headers="headers" />
    </template>

    <template #row>
      <TableRow v-for="(client, index) in clients" :key="index" :data="client" :index="index" />
    </template>

    <template #footer> </template>
  </TableWrapper>

  <MainPagination
    :total="5"
    :pageSize="pageSize"
    :onPageChange="onPageChange"
    :currentPage="2"
    :prevPage="1"
    :nextPage="3"
  />
</template>
