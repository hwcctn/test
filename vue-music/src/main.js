import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/css/common.css'
import api from '@/api/index'
import "./assets/font/iconfont.css"
const app = createApp(App)

app.config.globalProperties.$api = api

app.use(router).mount('#app')