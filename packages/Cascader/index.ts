import { App, Plugin } from 'vue';
import Cascader from './docs/demo.vue';

export const CascaderPlugin: Plugin = {
  install(app: App) {
    app.component('my-cascader', Cascader);
  },
};

export { Cascader };