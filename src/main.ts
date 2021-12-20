import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/markdown.css';

import MyKit from '../packages';
import Preview from './components/Preview.vue';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';

const app = createApp(App)
app.component('Preview', Preview)
app.use(MyKit).use(router).use(ElementPlus).mount('#app')
