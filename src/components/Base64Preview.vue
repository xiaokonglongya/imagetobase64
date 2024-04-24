<template>
  <div>
    <div>
      <a-textarea
        class="h-200px"
        v-model:model-value="base64Str"
        placeholder="请输入base64字符"
        allow-clear
      />
    </div>
    <div class="flex py-20px flex justify-between">
      <a-typography-text>
        <span class="font-bold text-18px"> 转换结果 </span>
      </a-typography-text>
      <div class="flex gap-8px">
        <a-button type="primary" @click="copyImage">
          <template #icon>
            <icon-save />
          </template>
          拷贝图片
        </a-button>
        <a-button type="primary" @click="saveImage">
          <template #icon>
            <icon-download />
          </template>
          下载图片
        </a-button>
      </div>
    </div>
    <div class="flex h-full w-full break-all gap-30px text-[var(color-fill-1)]">
      <div class="flex-1 h-200px flex justify-center items-center">
        <a-image
          fit="cover"
          class="min-w-280px mx-auto text-center"
          height="100%"
          :src="base64Str"
          alt="请输入base64字符"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Message } from '@arco-design/web-vue'
const base64Str = ref('')
const copyImage = () => {
  try {
    if (!base64Str.value) throw new Error('你好像没有进行转换')
    utools.copyImage(base64Str.value)
    Message.success('拷贝图片成功')
  } catch (error) {
    Message.error(error?.message || '拷贝结果失败')
  }
}
const saveImage = async () => {
  try {
    if (!base64Str.value) throw new Error('你好像没有进行转换')
    const fileType = base64Str.value.match(/data:image\/(\w+);base64/)?.[1]
    const defalutFileName = `image.${fileType || 'png'}`
    const path = utools.showSaveDialog({
      title: '保存位置',
      defaultPath: utools.getPath('downloads'),
      buttonLabel: '保存',
      defaultPath: defalutFileName
    })
    if (!path) return
    const saveResult = await window.services.saveBase64ImageAsync(path, base64Str.value)
    if (saveResult) {
      throw new Error(saveResult)
    }
    Message.success('保存图片成功')
  } catch (error) {
    Message.error(error?.message || '保存图片失败')
  }
}
</script>
