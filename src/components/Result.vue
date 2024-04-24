<template>
  <div>
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
        <a-button type="primary" @click="copyResult">
          <template #icon>
            <icon-save />
          </template>
          拷贝结果
        </a-button>
      </div>
    </div>
    <div class="flex h-full w-full break-all gap-30px text-[var(color-fill-1)]">
      <div class="flex-1 h-200px overflow-auto break-all">
        <a-typography-text>
          {{ base64 }}
        </a-typography-text>
      </div>
      <div class="flex-1 h-200px flex justify-center items-center">
        <a-image fit="cover" width="100%" height="100%" :src="base64" alt="请选择图片" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { Message } from '@arco-design/web-vue'

const props = defineProps({
  base64: String
})

const copyResult = () => {
  try {
    if (!props.base64) throw new Error('你好像没有进行转换')
    utools.copyText(props.base64)
    Message.success('拷贝结果成功')
  } catch (error) {
    Message.error(error?.message || '拷贝结果失败')
  }
}
const copyImage = () => {
  try {
    if (!props.base64) throw new Error('你好像没有进行转换')
    utools.copyImage(props.base64)
    Message.success('拷贝图片成功')
  } catch (error) {
    Message.error(error?.message || '拷贝结果失败')
  }
}
</script>
