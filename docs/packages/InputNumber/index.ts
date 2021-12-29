import { App, Plugin } from 'vue';
import InputNumber from './docs/demo.vue';

export const InputNumberPlugin: Plugin = {
  install(app: App) {
    app.component('my-input-number', InputNumber);
  },
};

export { InputNumber };