import { App, Plugin } from 'vue';
import Radio from './docs/demo.vue';

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('my-radio', Radio);
  },
};

export { Radio };