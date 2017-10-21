<!--App.vue是项目入口文件。-->
<template>
    <div id="app" >
        <!--<router-link to="/">Go to Foo</router-link>-->
        <!--<router-link to="/bar">Go to Bar</router-link>-->
        <router-view></router-view>
    </div>
</template>

<script>
//  import '../public/statics/css/minimal.css';
  import store from './vuex/store';
  export default {
//    store,
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed:{
      is_login:()=>{
        return store.state.is_login;
      }
    },
    watch:{
//      is_login:()=>{
//        if(store.state.is_login){
//          this.$router.push('/');
//        }
//      }
    },
    components:{

    },
    updated(){

    },
    methods:{
      current_user:()=>{

      }
    },
    created:function(){


    }
  }




</script>