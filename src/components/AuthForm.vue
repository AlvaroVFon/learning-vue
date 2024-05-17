<template>
  <form class="w-96 flex flex-col gap-3">
    <input
      type="text"
      :class="inputClass"
    />
    <input
      type="text"
      :class="inputClass"
    />
    <Button
      type="submit"
      label="Login"
      :handleClick="handleLoading"
      :isLoading="loading"
    />
  </form>
  <p class="text-accent">{{ email }}</p>

  {{ password }}
</template>
<script setup>
  import { ref } from 'vue'
  import Button from './Button.vue'
  import api from '@/utils/WebinarApi.js'

  const inputClass =
    'bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full text-accent'

  const email = ref('')
  const password = ref('')
  const handleLoading = (e) => {
    e.preventDefault()
    loading.value = !loading.value
  }
  const handelChange = (e) => {
    if (e.target.name === 'email') {
      email.value = e.target.value
    } else {
      password.value = e.target.value
    }
  }
  const handleSubmit = () => {
    console.log(email.value, password.value)
  }
</script>

<style scoped></style>
