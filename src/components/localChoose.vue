<template>
  <a-upload
    class="h-full"
    v-model:file-list="fileList"
    draggable
    action="/"
    :show-file-list="false"
    accept="image/png, image/jpeg"
    :auto-upload="false"
    @change="handleChoose"
  >
    <template #upload-button>
      <div
        class="h-180px w-full bg-[var(--color-fill-2)] text-[var(--color-text-1)] border border-dashed border-[var(--color-fill-4)] rounded-lg flex items-center justify-center"
      >
        <div>
          拖拽到这里进行转换
          <span style="color: #3370ff"> 点击选择 </span>
        </div>
      </div>
    </template>
  </a-upload>
</template>
<script setup>
import { ref } from 'vue'
const fileList = ref([])
const emits = defineEmits(['choose'])
const handleChoose = (e) => {
  if (!Array.isArray(e)) return
  const file = e[0]
  if (!file) return
  console.log(file)
  emits('choose', file?.file)
  fileList.value = []
}
</script>
