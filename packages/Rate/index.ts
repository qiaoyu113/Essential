import { App, Plugin } from 'vue';
import Rate from './docs/demo.vue';

export const RatePlugin: Plugin = {
  install(app: App) {
    app.component('my-input-number', Rate);
  },
};

export { Rate };