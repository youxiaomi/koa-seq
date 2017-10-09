
import Router from 'vue-router'
import Today from './views/neiye.vue'

const home = () => import('./views/home.vue')
const test = () => import('./views/test.vue')
// import home from './views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // component: resolve => require(['./views/home.vue'], resolve)
      component: home
    },
    {
      path: '/neiye',
      component: Today
    },
    {
      path: '/test',
      // component: resolve => require(['./views/home.vue'], resolve)
      component: test
    },
  ]
})

