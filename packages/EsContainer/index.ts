import { App, Plugin } from 'vue';
import EsContainer from './docs/demo.vue';

export const EsContainerPlugin: Plugin = {
  install(app: App) {
    app.component('my-escontainer', EsContainer);
  },
};

export { EsContainer };