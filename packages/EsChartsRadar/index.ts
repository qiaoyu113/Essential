import { App, Plugin } from 'vue';
import EsChartsRadar from './docs/demo.vue';

export const EsChartsRadarPlugin: Plugin = {
  install(app: App) {
    app.component('my-escharts-radar', EsChartsRadar);
  },
};

export { EsChartsRadar };