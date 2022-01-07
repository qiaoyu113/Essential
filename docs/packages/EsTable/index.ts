import { App, Plugin } from 'vue';
import EsTable from './docs/demo.vue';

export const EsTablePlugin: Plugin = {
  install(app: App) {
    app.component('my-escontainer', EsTable);
  },
};

export { EsTable };