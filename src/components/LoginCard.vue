<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import EmailIcon from '@/components/icons/EmailIcon.vue'
import FormInput from '@/components/FormInput.vue'
import PasswordIcon from '@/components/icons/PasswordIcon.vue'
const router = useRouter()
const email = ref('')
const password = ref('')
function handleSubmit() {
  //TODO: apply fetch logic here
  console.log({ email: email.value, password: password.value })
  router.push('/')
}
</script>
<template>
  <form @submit.prevent="handleSubmit" method="post" class="grid gap-8 w-96">
    <div class="flex flex-col gap-4">
      <FormInput placeholder="youremail@example.com" type="email" v-model="email">
        <EmailIcon />
      </FormInput>
      <FormInput placeholder="Password" type="password" v-model="password">
        <PasswordIcon />
      </FormInput>
    </div>
    <div class="flex flex-col gap-2">
      <button class="btn btn-primary text-lg">{{ $t('Login') }}</button>
      <p class="flex gap-2 tracking-wide w-full justify-center">
        {{ $t('Forgot yout password?') }}
        <a href="" class="text-primary"> {{ $t('Click here') }} </a>
      </p>
    </div>
  </form>
</template>
