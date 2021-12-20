/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

 import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

 const routes = [{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'),
  },{
    title: '测试组件',
    name: 'Foo',
    path: '/components/Foo',
    component: () => import('packages/Foo/docs/README.md'),
  },{
    title: 'Input组件',
    name: 'Input',
    path: '/components/Input',
    component: () => import('packages/Input/docs/README.md'),
  },{
    title: 'Radio组件',
    name: 'Radio',
    path: '/components/Radio',
    component: () => import('packages/Radio/docs/README.md'),
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
