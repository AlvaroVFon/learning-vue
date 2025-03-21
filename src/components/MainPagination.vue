<script setup>
defineProps({
  total: Number,
  pageSize: Number,
  onPageChange: Function,
  currentPage: Number,
  prevPage: {
    type: Number,
    default: 1,
  },
  nextPage: Number,
})
</script>
<template>
  <div class="w-full flex justify-center items-center p-3 gap-1">
    <button
      class="join-item btn btn-square hover:text-primary"
      type="radio"
      name="options"
      checked="true"
    >
      First
    </button>
    <button
      class="join-item btn btn-square hover:text-primary"
      type="radio"
      name="options"
      aria-label="3"
    >
      {{ currentPage - 1 }}
    </button>
    <button
      class="join-item btn btn-square hover:text-primary"
      type="radio"
      name="options"
      aria-label="4"
    >
      {{ currentPage }}
    </button>
    <button
      class="join-item btn btn-square hover:text-primary"
      type="radio"
      name="options"
      aria-label="4"
    >
      {{ currentPage + 1 }}
    </button>
    <button
      class="join-item btn btn-square hover:text-primary"
      type="radio"
      name="options"
      aria-label="4"
    >
      {{ currentPage + 1 }}
    </button>
    <button
      class="join-item btn btn-square hover:text-primary"
      type="radio"
      name="options"
      aria-label="4"
    >
      Last
    </button>
  </div>
</template>
