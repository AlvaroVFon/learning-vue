<script setup>
import { onMounted, ref } from 'vue'
import { users, headers } from '../mocks/users.js'
import Alert from '@/components/Alert.vue'
import TableWrapper from '@/components/Table/TableWrapper.vue'
import TableHeader from '@/components/Table/TableHeader.vue'
import TableRow from '@/components/Table/TableRow.vue'
import MainPagination from '@/components/MainPagination.vue'
import TableSkeleton from '@/components/Table/TableSkeleton.vue'
// import { useUsers } from '@/composables/useUsers.js'
// const { loading, error, fetchUsers } = useUsers()

// onMounted(() => fetchUsers)
const loading = ref(false)

onMounted(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
})
</script>

<!--TODO: add skeleton loader-->

<template>
  <Alert v-if="error" :message="error" alertType="error" />
  <TableSkeleton v-if="!error && loading" />

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
    v-if="!error && !loading"
    :total="5"
    :pageSize="pageSize"
    :onPageChange="onPageChange"
    :currentPage="2"
    :prevPage="1"
    :nextPage="3"
  />
</template>
