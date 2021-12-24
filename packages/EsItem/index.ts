import { App, Plugin } from 'vue';
import EsItem from './docs/demo.vue';

export const EsItemPlugin: Plugin = {
  install(app: App) {
    app.component('my-esitem', EsItem);
  },
};

export { EsItem };