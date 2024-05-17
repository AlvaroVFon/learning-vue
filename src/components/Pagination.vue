<template>
  <div class="text-accent w-full flex justify-center items-center">
    <button
      @click="decrement"
      class="border"
    >
      Previous
    </button>
    {{ page }}
    <button @click="increment">Next</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const page = ref(router.currentRoute.value.query.page || 1);
</script>
