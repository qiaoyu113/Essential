import { App, Plugin } from 'vue';
import CheckBox from './docs/demo.vue';

export const CheckBoxPlugin: Plugin = {
  install(app: App) {
    app.component('my-checkbox', CheckBox);
  },
};

export { CheckBox };