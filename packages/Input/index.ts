import { App, Plugin } from 'vue';
import Input from './docs/demo.vue';

export const InputPlugin: Plugin = {
  install(app: App) {
    app.component('my-input', Input);
  },
};

export { Input };