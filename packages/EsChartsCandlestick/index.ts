import { App, Plugin } from 'vue';
import EsChartsCandlestick from './docs/demo.vue';

export const EsChartsCandlestickPlugin: Plugin = {
  install(app: App) {
    app.component('my-escharts-candlestick', EsChartsCandlestick);
  },
};

export { EsChartsCandlestick };