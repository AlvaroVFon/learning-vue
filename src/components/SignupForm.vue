<template>
  <div class="flex flex-col items-center">
    <form
      class="w-96 flex flex-col gap-3"
      @submit="handleSubmit"
    >
      <input
        type="text"
        :class="inputClass"
        v-model="name"
      />
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
        label="Sign up"
        :isLoading="loading"
      />
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import api from '@/utils/WebinarApi';
import Button from './Button.vue';

const inputClass =
  'bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full text-accent';

const email = ref('');
const password = ref('');
const name = ref('');
const loading = ref(false);

const handleSubmit = (e) => {
  e.preventDefault();
  loading.value = true;
  console.log(email.value, password.value, name.value);
  // api
  //   .register({
  //     email: email.value,
  //     password: password.value,
  //     name: name.value,
  //   })
  //   .then(() => {
  //     loading.value = false;
  //     alert('User registered successfully');
  //   })
  //   .catch((error) => {
  //     loading.value = false;
  //     alert(error.message);
  //   });
};
</script>
