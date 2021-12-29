import { App, Plugin } from 'vue';
import TimeSelect from './docs/demo.vue';

export const TimeSelectPlugin: Plugin = {
  install(app: App) {
    app.component('my-timeselect', TimeSelect);
  },
};

export { TimeSelect };