import EsForm from './Essential/EsForm.vue';
import EsContainer from './EssentialContainer/index.vue';
import EsItem from './Essential/EsItem.vue';
import EsTable from './Essential/EsTable.vue';
import Pagination from './Essential/Pagination.vue';
import EsCharts from './Essential/EsCharts.vue';

const components = {
    EsForm,
    EsContainer,
    EsItem,
    EsTable,
    Pagination,
    EsCharts
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