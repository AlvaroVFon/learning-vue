<template>
  <div className="flex flex-col gap-4">
    <div className="flex justify-between items-center">
      <span className="text-muted">#{{ course.id }}</span>
      <p className="text-xs p-1 text-muted">
        {{ course.creation_date.split('T')[0].split('-').reverse().join('-') }}
      </p>
    </div>
    <h2 class="font-extrabold text-xl text-primary tracking-tight h-20">
      {{ course.name }}
    </h2>
  </div>
</template>
<script setup>
  defineProps({
    course: {
      type: Object,
      required: true,
    },
  })
</script>

<style scoped></style>
