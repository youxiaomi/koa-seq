import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/home.vue')
    },
    {
      path: '/bar',
      component: () => import('./views/test.vue')
    },
    {
      path: '/admin/login',
      component: () => import('./views/admin/login.vue')
    },
    {
      path: '/admin/production',
      component: () => import('./views/admin/production/index.vue')
    },
  ]
})

