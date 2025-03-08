<script setup>
const props = defineProps(['data', 'index'])
const dataKeys = Object.keys(props.data)
import EyeIcon from '@/components/icons/EyeIcon.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
</script>
<template>
  <tr class="bg-base-200 hover:bg-base-300">
    <template v-for="key in dataKeys" :key>
      <td>{{ props.data[key] }}</td>
    </template>
    <td>
      <a href="#"><EyeIcon class="hover:text-primary duration-300" /></a>
    </td>
    <td>
      <a href="#"><EditIcon class="hover:text-warning duration-300" /></a>
    </td>
    <td>
      <a href="#"><DeleteIcon class="hover:text-error duration-300" /></a>
    </td>
  </tr>
</template>
