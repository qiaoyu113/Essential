import { App, Plugin } from 'vue';
import EsChartsPie from './docs/demo.vue';

export const EsChartsPiePlugin: Plugin = {
  install(app: App) {
    app.component('my-escharts-pie', EsChartsPie);
  },
};

export { EsChartsPie };