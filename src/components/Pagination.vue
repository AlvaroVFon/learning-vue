<template>
  <div
    v-if="totalPages > 1"
    class="flex flex-col items-center"
  >
    <p class="text-muted p-3">
      <span class="text-accent">{{ page }}</span> of
      <span class="text-accent">{{ totalPages }}</span>
    </p>
    <div class="text-accent w-full flex justify-center items-center gap-3">
      <button>
        <FirstPageIcon color="#42b883" />
      </button>
      <button
        @click="decrement"
        class="bg-accent text-primary font-semibold hover:bg-accentDarker p-2 rounded-md w-24 duration-300"
        :disabled="page === 1"
      >
        Previous
      </button>

      <button
        @click="increment"
        class="bg-accent text-primary font-semibold hover:bg-accentDarker p-2 rounded-md w-24 duration-300"
        :disabled="Number(page) === Number(totalPages)"
      >
        Next
      </button>
      <button>
        <LastPageIcon color="#42b883" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import FirstPageIcon from '@/components/icons/FirstPageIcon.vue';
import LastPageIcon from '@/components/icons/LastPageIcon.vue';
const router = useRouter();

defineProps({
  totalPages: {
    type: Number,
    required: true,
  },
});
const increment = () => {
  page.value++;
  router.push({ query: { page: page.value, perPage: 10 } });
  window.scrollTo(0, 0);
};
const decrement = () => {
  page.value--;
  router.push({ query: { page: page.value, perPage: 10 } });
  window.scrollTo(0, 0);
};
const page = ref(1);
</script>
<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
