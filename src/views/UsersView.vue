<script setup>
import { onMounted } from 'vue'
import { users, headers } from '../mocks/users.js'
import Alert from '@/components/Alert.vue'
import TableWrapper from '@/components/Table/TableWrapper.vue'
import TableHeader from '@/components/Table/TableHeader.vue'
import TableRow from '@/components/Table/TableRow.vue'
import { useUsers } from '@/composables/useUsers.js'
import MainPagination from '@/components/MainPagination.vue'
const { loading, error, fetchUsers } = useUsers()

onMounted(() => fetchUsers)
</script>

<!--TODO: add skeleton loader-->

<template>
  <Alert v-if="error" :message="error" />

  <div class="flex flex-col space-y-2"></div>

  <TableWrapper v-if="!error && !loading">
    <template #header>
      <TableHeader :headers="headers" v-if="!loading" />
    </template>

    <template #row>
      <TableRow v-for="(user, index) in users" :key="index" :data="user" :index="index" />
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
