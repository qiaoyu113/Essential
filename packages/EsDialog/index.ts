import { App, Plugin } from 'vue';
import EsDialog from './docs/demo.vue';

export const EsDialogPlugin: Plugin = {
  install(app: App) {
    app.component('my-esdialog', EsDialog);
  },
};

export { EsDialog };