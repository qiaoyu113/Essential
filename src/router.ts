/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

const routes = [
  {
    title: '介绍',
    name: 'essential',
    path: '/',
    component: () => import('packages/Essential/docs/README.md'),
  },
  {
    title: '介绍',
    name: 'Essential',
    path: '/components/Introduce',
    component: () => import('packages/Essential/docs/README.md'),
  },
  {
    title: '安装',
    name: 'Install',
    path: '/components/Install',
    component: () => import('packages/Install/docs/README.md'),
  },
  {
    title: '快速上手',
    name: 'Start',
    path: '/components/Start',
    component: () => import('packages/Start/docs/README.md'),
  }, {
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'),
  }, {
    title: '测试组件',
    name: 'Foo',
    path: '/components/Foo',
    component: () => import('packages/Foo/docs/README.md'),
  }, {
    title: 'Form',
    name: 'Form',
    path: '/components/Form',
    component: () => import('packages/Form/docs/README.md'),
  }, {
    title: 'Input组件',
    name: 'Input',
    path: '/components/Input',
    component: () => import('packages/Input/docs/README.md'),
  },{
    title: 'InputNumber组件',
    name: 'InputNumber',
    path: '/components/InputNumber',
    component: () => import('packages/InputNumber/docs/README.md'),
  }, {
    title: 'Radio组件',
    name: 'Radio',
    path: '/components/Radio',
    component: () => import('packages/Radio/docs/README.md'),
  }, {
    title: 'Rate组件',
    name: 'Rate',
    path: '/components/Rate',
    component: () => import('packages/Rate/docs/README.md'),
  }, {
    title: 'Select组件',
    name: 'Select',
    path: '/components/Select',
    component: () => import('packages/Select/docs/README.md'),
  }, {
    title: 'VirtualizedSelect组件',
    name: 'VirtualizedSelect',
    path: '/components/VirtualizedSelect',
    component: () => import('packages/VirtualizedSelect/docs/README.md'),
  }, {
    title: 'Slider组件',
    name: 'Slider',
    path: '/components/Slider',
    component: () => import('packages/Slider/docs/README.md'),
  }, {
    title: 'Switch组件',
    name: 'Switch',
    path: '/components/Switch',
    component: () => import('packages/Switch/docs/README.md'),
  }, {
    title: 'CheckBox组件',
    name: 'CheckBox',
    path: '/components/CheckBox',
    component: () => import('packages/CheckBox/docs/README.md'),
  }, {
    title: 'TimePicker组件',
    name: 'TimePicker',
    path: '/components/TimePicker',
    component: () => import('packages/TimePicker/docs/README.md'),
  }, {
    title: 'TimeSelect组件',
    name: 'TimeSelect',
    path: '/components/TimeSelect',
    component: () => import('packages/TimeSelect/docs/README.md'),
  }, {
    title: 'DatePicker组件',
    name: 'DatePicker',
    path: '/components/DatePicker',
    component: () => import('packages/DatePicker/docs/README.md'),
  }, {
    title: 'DateTimePicker组件',
    name: 'DateTimePicker',
    path: '/components/DateTimePicker',
    component: () => import('packages/DateTimePicker/docs/README.md'),
  }, {
    title: 'Transfer组件',
    name: 'Transfer',
    path: '/components/Transfer',
    component: () => import('packages/Transfer/docs/README.md'),
  }, {
    title: 'EsContainer组件',
    name: 'EsContainer',
    path: '/components/EsContainer',
    component: () => import('packages/EsContainer/docs/README.md'),
  }, {
    title: 'EsItem组件',
    name: 'EsItem',
    path: '/components/EsItem',
    component: () => import('packages/EsItem/docs/README.md'),
  }, {
    title: 'EsTable组件',
    name: 'EsTable',
    path: '/components/EsTable',
    component: () => import('packages/EsTable/docs/README.md'),
  }, {
    title: 'EsCharts组件',
    name: 'EsChartsBar',
    path: '/components/EsChartsBar',
    component: () => import('packages/EsChartsBar/docs/README.md'),
  }, {
    title: 'EsCharts组件',
    name: 'EsChartsLine',
    path: '/components/EsChartsLine',
    component: () => import('packages/EsChartsLine/docs/README.md'),
  }, {
    title: 'EsCharts组件',
    name: 'EsChartsPie',
    path: '/components/EsChartsPie',
    component: () => import('packages/EsChartsPie/docs/README.md'),
  }, {
    title: 'EsDialog组件',
    name: 'EsDialog',
    path: '/components/EsDialog',
    component: () => import('packages/EsDialog/docs/README.md'),
  },{
    title: 'EsCharts组件',
    name: 'EsChartsScatter',
    path: '/components/EsChartsScatter',
    component: () => import('packages/EsChartsScatter/docs/README.md'),
  },{
    title: 'EsCharts组件',
    name: 'EsChartsCandlestick',
    path: '/components/EsChartsCandlestick',
    component: () => import('packages/EsChartsCandlestick/docs/README.md'),
  },{
    title: 'EsCharts组件',
    name: 'EsChartsRadar',
    path: '/components/EsChartsRadar',
    component: () => import('packages/EsChartsRadar/docs/README.md'),
  },{
    title: 'EsCharts组件',
    name: 'EsChartsBoxplot',
    path: '/components/EsChartsBoxplot',
    component: () => import('packages/EsChartsBoxplot/docs/README.md'),
  }];
  
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };

const router = createRouter(routerConfig as RouterOptions);

export default router;

//  {
//   title: 'Cascader级联选择器',
//   name: 'Cascader',
//   path: '/components/Cascader',
//   component: () => import('packages/Cascader/docs/README.md'),
// },
