import { App, Plugin } from 'vue';
import EsChartsScatter from './docs/demo.vue';

export const EsChartsScatterPlugin: Plugin = {
  install(app: App) {
    app.component('my-escharts', EsChartsScatter);
  },
};

export { EsChartsScatter };