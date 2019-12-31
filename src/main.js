// import './set-public-path';
import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Antd);

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#master',
    render: h => h(App),
    router
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
