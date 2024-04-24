<template>
  <div class="relative bg-[var(--color-bg-1)] box-border flex flex-col px-12px py-24px">
    <div class="absolute z-99 right-12px top-30px">
      <settings />
    </div>
    <div class="min-h-1px flex-1">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" title="转为Base64">
          <div class="mx-auto w-full flex flex-col gap-12px">
            <network-enter @success="handleSuccess" />
            <local-choose @choose="handleChange" />
          </div>
          <result :base64="tempBase64Result" />
        </a-tab-pane>
        <a-tab-pane key="2" title="Base64转图片">
          <base64-preview />
        </a-tab-pane>
      </a-tabs>
    </div>
    <layout-footer class="mt-30px" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import NetworkEnter from './components/networkEnter.vue'
import Settings from './components/Settings.vue'
import LocalChoose from './components/localChoose.vue'
import Result from './components/Result.vue'
import LayoutFooter from './components/Footer.vue'
import Base64Preview from './components/Base64Preview.vue'
import { getBase64 } from '@/utils/image'
const tempBase64Result = ref('')
const handleChange = async (file) => {
  const base64 = await getBase64(file)
  tempBase64Result.value = base64
}
const handleSuccess = (base64) => {
  tempBase64Result.value = base64
}
</script>

<style scoped></style>
