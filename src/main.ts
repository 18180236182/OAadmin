import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/**
 * 样式
 */
import 'normalize.css'
import './assets/css/index.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import hRequest from '@/utils/request'
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
