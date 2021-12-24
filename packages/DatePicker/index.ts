import { App, Plugin } from 'vue';
import TimePicker from './docs/demo.vue';

export const TimePickerPlugin: Plugin = {
  install(app: App) {
    app.component('my-timepicket', TimePicker);
  },
};

export { TimePicker };