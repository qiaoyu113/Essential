import { App, Plugin } from 'vue';
import Upload from './docs/demo.vue';

export const UploadPlugin: Plugin = {
  install(app: App) {
    app.component('my-timepicket', Upload);
  },
};

export { Upload };