import Vue from 'vue'
import Router from 'vue-router'
import store from './vuex/store'


Vue.use(Router)
var router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'production'
    },
    {
      path: '/production',
      component: () => import('./views/admin/production/product_list.vue'),
    },
    {
      path: '/production/:id',
      component: () => import('./views/admin/production/edit.vue')
    },
    {
      path: '/production/addstock/:id',
      component: () => import('./views/admin/production/add_stock.vue')
    },
    {
      path: '/import_record',
      component: () => import('./views/admin/record/import_record.vue'),
    },
    {
      path: '/sell_record',
      component: () => import('./views/admin/record/sell_record.vue'),
    },
    {
      path: '/sell_show/:id',
      component: () => import('./views/admin/record/sell_show.vue')
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
    if(!store.state.current_user.account){
      $.get("/admin/current_user",function (user) {
        store.state.current_user = user
      })
    }

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