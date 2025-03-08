<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps({
  placeholder: String,
  modelValue: { type: String, default: '' },
  type: String,
})

const emit = defineEmits(['update:modelValue'])

function handleEmit(event) {
  emit('update:modelValue', event.target.value)
}
</script>
<template>
  <label className="input w-full h-12 text-lg ">
    <slot></slot>
    <input
      :type="type"
      className="grow"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleEmit"
    />
  </label>
</template>
