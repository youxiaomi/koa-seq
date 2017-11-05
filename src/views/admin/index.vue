<template>
	<div>



			<keep-alive>
				<component v-bind:is="current_view"></component>
			</keep-alive>
			<!--<import-record></import-record>-->


	</div>
</template>

<script>
//	import productList from './production/product_list.vue';
//	import importRecord from './compents/import_record.vue';
//	import sellRecord from './record/sell_record.vue';
//	import sellShow from './compents/sell_show.vue';

  export default{
    data() {
      return {
//        productions: []
      }
    },
    computed: {
      store: function () {
        return this.$store
      },
      current_view: function () {
        var component = this.$route.params.component;
        if(!component){
          component = this.$route.history.path
        }
        return component
      }

    },
	  methods:{
      logout:function () {
	      $.ajax({
		      url:'/admin/logout',
		      type:"delete",
		      success:function () {
			      window.location.reload()
          }
	      })
      }
	  },
    created: function () {

    },
	  components:{
      productList,
      importRecord,
      sellRecord,
      sellShow,
	  },
	  updated: function () {


    }
  }
</script>
<style scoped lang="scss">

</style>
