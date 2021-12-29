import { App, Plugin } from 'vue';
import Slider from './docs/demo.vue';

export const RatePlugin: Plugin = {
  install(app: App) {
    app.component('my-slider', Slider);
  },
};

export { Slider };