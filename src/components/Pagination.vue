<template>
  <div class="text-accent w-full flex justify-center items-center gap-3">
    <button>
      <FirstPageIcon color="#42b883" />
    </button>
    <button
      @click="decrement"
      class="bg-accent text-primary font-semibold hover:bg-accentDarker p-2 rounded-md w-24 duration-300"
    >
      Previous
    </button>

    <button
      @click="increment"
      class="bg-accent text-primary font-semibold hover:bg-accentDarker p-2 rounded-md w-24 duration-300"
    >
      Next
    </button>
    <button>
      <LastPageIcon color="#42b883" />
    </button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FirstPageIcon from '@/components/icons/FirstPageIcon.vue';
import LastPageIcon from '@/components/icons/LastPageIcon.vue';
const router = useRouter();

const page = ref(router.currentRoute.value.query.page || 1);
</script>
