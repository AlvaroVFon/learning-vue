<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const selectedLocale = ref(locale.value)

function setLocale() {
  locale.value = selectedLocale.value
  localStorage.setItem('locale', selectedLocale.value)
}

const savedLocale = localStorage.getItem('locale')
if (savedLocale) {
  selectedLocale.value = savedLocale
  locale.value = savedLocale
}
</script>
<template>
  <select class="select" v-model="selectedLocale" @change="setLocale">
    <option value="en">{{ $t('English') }}</option>
    <option value="es">{{ $t('Spanish') }}</option>
  </select>
</template>
