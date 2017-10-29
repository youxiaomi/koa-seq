<template>
	<div class="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix">
		<div class="dataTables_filter" id="DataTables_Table_0_filter">
			<label>Search: <input type="text"	aria-controls="DataTables_Table_0"></label>
		</div>
		<div class="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers"
		     id="DataTables_Table_0_paginate">
			<a tabindex="0"  v-on:click="get_data(1)"
			   :class="[page == 1 ? 'ui-state-disabled' : '']"
			   class="first ui-corner-tl ui-corner-bl fg-button ui-button ui-state-default "
			   id="DataTables_Table_0_first">First</a>
			<a tabindex="0" :class="[page == 1 ? 'ui-state-disabled' : '']"
			   v-on:click="get_data(page - 1 <= 0 ? 1 : page - 1)"
			   class="previous fg-button ui-button ui-state-default" id="DataTables_Table_0_previous">Previous</a>
			<span>
							<a tabindex="0" v-on:click="get_data(p)" v-for="p in pages"
							   :class="[ page == p ?'ui-state-disabled' :'' ]"
							   class="fg-button ui-button ui-state-default ">{{ p }}</a>
						</span>
			<a tabindex="0" :class="[page == count ? 'ui-state-disabled' : '']"
			   v-on:click="get_data( page + 1 >= count ? count : page+1)"
			   class="next fg-button ui-button ui-state-default" id="DataTables_Table_0_next">Next</a>
			<a tabindex="0" v-on:click="get_data(count)"
			   :class="[page == count ? 'ui-state-disabled' : '']"
			   class="last ui-corner-tr ui-corner-br fg-button ui-button ui-state-default"
			   id="DataTables_Table_0_last">Last</a>
		</div>
	</div>
</template>
<script>
  export default {
    props: ['url'],
    data() {
      return {
        pages: _.range(1, 6),
        page: 1,
        count: 1,
      }
    },
    computed: {
      store: function () {
        return this.$store
      },

    },
    methods:{
	    get_data: function (page) {
        page = page || this.page
        var self = this;
        $.get( self.url+'?page='+page, function (data) {
          self.pages = data.pages;
          self.page = page;
          self.count = data.count;
          self.$emit('receive_data',data.datas)
        })
      }
    },
    created: function () {
	    this.get_data()
    },
    updated: function () {

    }
  }
</script>


<style lang="scss" scoped>
	#header h1 {
		line-height: 20px;
		color: #fff;
		background: none;
		font-size: 23px;
	}
	input[type="file"] {
		width: 60px;
	}
	.ajax-upload-dragdrop{
		width: 50px !important;
	}
	.ajax-file-upload-container{
		display: none;
	}
	.wrap{
		width: 50px;
		height: 30px;
		overflow: hidden;
		position: relative;
		span{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: #ccc;
			border-radius: 5px;
			line-height: 30px;
			text-align: center;
		}
		.wrap_inner{
			opacity: 0;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 5;
		}
	}
	.gradeA{
		img{
			max-width: 100px;
			max-height: 50px;
		}
	}
	.show_img{
		width: 100%;
		height: 100vh;
		display: none;
		background-color: rgba(0,0,0,0.6);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 200;
		img{
			height: 90%;
			margin: 0 auto;
			display: block;
		}
		&.active{
			display: block;
		}
	}
</style>