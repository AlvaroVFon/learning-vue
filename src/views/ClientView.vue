<script setup>
import { clients, headers } from '../mocks/clients.js'
import TableWrapper from '@/components/Table/TableWrapper.vue'
import TableHeader from '@/components/Table/TableHeader.vue'
import TableRow from '@/components/Table/TableRow.vue'
</script>
<template>
  <TableWrapper>
    <template #header>
      <TableHeader :headers="headers" />
    </template>

    <template #row>
      <TableRow v-for="(client, index) in clients" :key="index" :data="client" :index="index" />
    </template>
  </TableWrapper>
  <!-- TODO: Add pagination -->
</template>
