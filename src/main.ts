import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/markdown.css';

import MyKit from '../packages';
import Preview from './components/Preview.vue';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import Essential from './components/index';
import * as echarts from 'echarts';

const app = createApp(App)
app.component('Preview', Preview)
app.config.globalProperties.$echarts = echarts
app.use(MyKit).use(router).use(ElementPlus).use(Essential).mount('#app')
