import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex/store'


Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/product-list'
    },
    {
      path: '/:component',
      component: () => import('./views/admin/index.vue')
    },
    {
      path: '/admin/login',
      component: () => import('./views/admin/login.vue')
    },
    {
      path: '/admin/production',
      component: () => import('./views/admin/production/index.vue')
    },
    {
      path: '/bar',
      component: () => import('./views/test.vue')
    },
  ]
});

router.beforeEach((to, from, next) => {

  var login_path ='/admin/login'
  if(!store.state.is_login ){
    store.commit('is_login')
  }
  if(store.state.is_login ){

    if(to.path ==login_path){
      next('/')
    }else{
      next()
    }
  }else{
    if(to.path ==login_path){
      next()
      return
    }else{
      next(login_path)
    }

  }
})



export default router