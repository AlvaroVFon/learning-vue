<script setup>
import { users, headers } from '../mocks/users.js'
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
      <TableRow v-for="(user, index) in users" :key="index" :data="user" :index="index" />
    </template>
  </TableWrapper>
  <!-- TODO: Add pagination -->
</template>
