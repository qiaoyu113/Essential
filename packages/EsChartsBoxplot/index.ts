import { App, Plugin } from 'vue';
import EsChartsBoxplot from './docs/demo.vue';

export const EsChartsBoxplotPlugin: Plugin = {
  install(app: App) {
    app.component('my-escharts-boxplot', EsChartsBoxplot);
  },
};

export { EsChartsBoxplot };