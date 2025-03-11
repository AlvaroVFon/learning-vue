<script setup>
import { ref } from 'vue'
import { useLogin } from '@/composables/useLogin'
import EmailIcon from '@/components/icons/EmailIcon.vue'
import FormInput from '@/components/FormInput.vue'
import PasswordIcon from '@/components/icons/PasswordIcon.vue'
import Spinner from '@/components/Spinner.vue'
import Alert from '@/components/Alert.vue'
const username = ref('')
const password = ref('')
const { login, loading, error } = useLogin()
async function handleSubmit() {
  await login({ username: username.value, password: password.value })
}
</script>
<template>
  <form @submit.prevent="handleSubmit" method="post" class="grid gap-8 w-96">
    <div class="flex flex-col gap-4">
      <FormInput placeholder="username" type="text" v-model="username">
        <EmailIcon />
      </FormInput>
      <FormInput placeholder="Password" type="password" v-model="password">
        <PasswordIcon />
      </FormInput>
    </div>
    <div class="flex flex-col gap-2">
      <button class="btn btn-primary text-lg">{{ $t('Login') }} <Spinner :loading /></button>
      <p class="flex gap-2 tracking-wide w-full justify-center">
        {{ $t('Forgot yout password?') }}
        <a href="" class="text-primary"> {{ $t('Click here') }} </a>
      </p>
    </div>
    <Alert v-if="error" alertType="error" :message="error" />
  </form>
</template>
