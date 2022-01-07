import { App, Plugin } from 'vue';
import EsChartsBar from './docs/demo.vue';

export const EsChartsBarPlugin: Plugin = {
  install(app: App) {
    app.component('my-escharts-bar', EsChartsBar);
  },
};

export { EsChartsBar };