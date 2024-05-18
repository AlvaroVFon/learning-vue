<template>
  <form
    class="w-96 flex flex-col gap-3"
    @submit="handleSubmit"
  >
    <input
      type="email"
      :class="inputClass"
      v-model="email"
    />
    <input
      type="password"
      :class="inputClass"
      v-model="password"
    />
    <Button
      type="submit"
      label="Login"
      :isLoading="loading"
    />
  </form>
</template>
<script setup>
  import { ref } from 'vue'
  import Button from './Button.vue'
  import api from '@/utils/WebinarApi.js'

  const inputClass =
    'bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full text-accent'

  const email = ref('')
  const password = ref('')
  const loading = ref(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const Login = async () => {
      loading.value = true
      try {
        console.log(email.value, password.value)
        const response = await api.login(email.value, password.value)
        console.log(response)
      } catch (error) {
        console.error(error)
      } finally {
        loading.value = false
      }
    }
    Login()
  }
</script>

<style scoped></style>
