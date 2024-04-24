<template>
  <div class="">
    <a-switch v-model="isDarkMode" @change="handleChange">
      <template #checked-icon>
        <icon-moon-fill />
      </template>
      <template #unchecked-icon>
        <icon-sun-fill />
      </template>
    </a-switch>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)')?.matches || false)
console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)

const handleChange = (value) => {
  setDarkMode(value)
}
/**
 * 设置主题
 * @param {boolean} isDark
 */
const setDarkMode = (isDark) => {
  isDarkMode.value = isDark
  document.body.setAttribute('arco-theme', isDark ? 'dark' : null)
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) {
    setDarkMode(true)
  } else {
    setDarkMode(false)
  }
})
</script>
