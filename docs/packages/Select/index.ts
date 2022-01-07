import { App, Plugin } from 'vue';
import Select from './docs/demo.vue';

export const SelectPlugin: Plugin = {
  install(app: App) {
    app.component('my-input-number', Select);
  },
};

export { Select };