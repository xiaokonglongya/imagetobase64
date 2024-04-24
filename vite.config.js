import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { vitePluginForArco } from '@arco-plugins/vite-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: true
  },
  plugins: [
    vue(),
    UnoCSS(),
    vitePluginForArco({
      style: 'css'
    })
  ]
})
