import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import { createPinia } from 'pinia'
createApp(App).use(createPinia).mount('#app')
