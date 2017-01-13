import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import store from './vuex/store';
// import { UPDATE_PROGRESS, SHOW_LOADING } from './vuex/mutation_types';
import App from './App';

Vue.use(VueResource);
Vue.use(VueRouter);

// 异步加载模块
// 主页
const Hello = (resolve) => {
  require(['./views/Hello'], resolve);
};


// 路由映射
const routes = [
  { path: '/Hello', component: Hello },
];

// 路由
const router = new VueRouter({
  routes,
});

// vue实例
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#container');
