import EsForm from './Essential/EsForm.vue';
import EsContainer from './EssentialContainer/index.vue';
import EsItem from './Essential/EsItem.vue';
import EsTable from './Essential/EsTable.vue';
import Pagination from './Essential/Pagination.vue';
import EsCharts from './Essential/EsCharts.vue';
import * as Icons from '@element-plus/icons-vue';

const IconArr = Icons

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
  // 注册Icons 全局组件
  Object.keys(Icons).forEach((key) => {
    Vue.component(key, IconArr[key])
  })
}

const Essential = {
  install,
  ...components,
}

export default Essential