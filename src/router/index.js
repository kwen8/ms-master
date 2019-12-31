import Vue from 'vue';
import Router from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'base',
      component: BaseLayout
    }
  ]
});
