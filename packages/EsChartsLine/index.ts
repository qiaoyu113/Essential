import { App, Plugin } from 'vue';
import EsCharts from './docs/demo.vue';

export const EsChartsPlugin: Plugin = {
  install(app: App) {
    app.component('my-escharts', EsCharts);
  },
};

export { EsCharts };