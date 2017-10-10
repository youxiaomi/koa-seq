// main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from './app.vue'
import router from './router.js'


new Vue({
  router,
  el: '#appIndex',
  render: h => h(App)
})
