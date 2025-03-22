<script setup>
import { users } from '@/mocks/users'
import { useRoute } from 'vue-router'
const { params } = useRoute()
const user = users.find((user) => user.id === Number(params.id))
</script>
<template>
  <form action="" class="form">
    {{ user }}
  </form>
</template>
