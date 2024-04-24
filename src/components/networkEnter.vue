<template>
  <a-space class="w-full" direction="vertical" size="large">
    <a-input-search
      v-model:model-value="url"
      placeholder="输入网络地址"
      @search="downLoadImage"
      button-text="转换"
      search-button
      allow-clear
      :loading="loading"
    >
      <template #button-icon>
        <icon-translate />
      </template>
    </a-input-search>
  </a-space>
</template>
<script setup>
import { useToggle } from '@vueuse/core'
import { ref } from 'vue'
import { Message } from '@arco-design/web-vue'
import { isImageUrl, getBase64Image } from '@/utils/image'
const emits = defineEmits('success')
const [loading, toggleLoading] = useToggle(false)
const url = ref('')
const downLoadImage = () => {
  toggleLoading(true)
  // 使用正则判断是不是一个图片的 url
  if (!isImageUrl(url.value)) {
    Message.error('请输入正确的图片链接')
    toggleLoading(false)
    return
  }
  const img = new Image()
  img.src = url.value
  img.crossOrigin = '*'
  img.onload = () => {
    const base64 = getBase64Image(img)
    emits('success', base64)
    toggleLoading(false)
  }
  img.onerror = () => {
    Message.error('图片加载失败，请检查链接是否正确')
    toggleLoading(false)
  }
}
</script>
