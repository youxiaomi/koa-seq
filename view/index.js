import Vue from 'vue';
import routes from './vue_conf/vue_router'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import store from "./vue_conf/store";

const router = new VueRouter({
  routes,
})

const app = new Vue({
  router,
  store
}).$mount('#app')

