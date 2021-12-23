import EsForm from './Essential/EsForm.vue';
import EsContainer from './EssentialContainer/index.vue';
import EsItem from './Essential/EsItem.vue';

const components = {
    EsForm,
    EsContainer,
    EsItem
};

function install(Vue) {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
}

export default {
  install,
  ...components,
};