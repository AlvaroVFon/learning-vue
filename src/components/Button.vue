<template>
  <button
    @click="handleClick"
    class="border border-accent text-accent font-bold py-2 px-4 rounded hover:bg-accent hover:text-white duration-300 flex justify-center items-center gap-4"
  >
    {{ label }}
    <SpinnerIcon
      :width="25"
      :height="25"
      :isLoading="isLoading"
      color="white"
    />
  </button>
</template>
<script setup>
  import SpinnerIcon from './icons/SpinnerIcon.vue'
  defineProps({
    type: {
      type: String,
      required: false,
    },
    handleClick: {
      type: Function,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    isLoading: {
      type: Boolean,
      required: false,
    },
    label: {
      type: String,
      required: false,
      default: 'Click me!',
    },
  })
</script>
