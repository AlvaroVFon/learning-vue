<script setup>
import { onMounted } from 'vue'
import { users, headers } from '../mocks/users.js'
import TableWrapper from '@/components/Table/TableWrapper.vue'
import TableHeader from '@/components/Table/TableHeader.vue'
import TableRow from '@/components/Table/TableRow.vue'
import { useUsers } from '@/composables/useUsers.js'
const { loading, error, fetchUsers } = useUsers()
onMounted(() => fetchUsers)
console.log(users)
</script>
<template>
  <TableWrapper v-if="!error">
    <template #header>
      <TableHeader :headers="headers" />
    </template>

    <template #row>
      <TableRow v-for="(user, index) in users" :key="index" :data="user" :index="index" />
    </template>
  </TableWrapper>
  <!-- TODO: Add pagination -->
</template>
