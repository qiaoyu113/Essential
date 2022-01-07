import { App, Plugin } from 'vue';
import Form from './docs/demo.vue';

export const FormPlugin: Plugin = {
  install(app: App) {
    app.component('my-form', Form);
  },
};

export { Form };