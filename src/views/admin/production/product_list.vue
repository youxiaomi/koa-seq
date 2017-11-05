<template>
	<div>
		<layout></layout>
		<div id="content">
			<div class="container-fluid">
			<div class="widget-box">
				<div class="widget-title"><span class="icon"><i class="icon-th"></i></span>
					<h5>产品详情</h5>
				</div>
				<div class="widget-content nopadding">
					<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper" role="grid">
						<div class="">
							<div id="DataTables_Table_0_length" class="dataTables_length"><label>Show
								<div class="select2-container" id="s2id_autogen1"><a href="#" onclick="return false;"
								                                                     class="select2-choice"> <span>10</span><abbr
									class="select2-search-choice-close" style="display:none;"></abbr>
									<div><b></b></div>
								</a>
									<div class="select2-drop select2-offscreen">
										<div class="select2-search"><input type="text" autocomplete="off" class="select2-input"
										                                   tabindex="0"></div>
										<ul class="select2-results"></ul>
									</div>
								</div>
								<select size="1" name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
								        style="display: none;">
									<option value="10" selected="selected">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</select> entries</label></div>
						</div>
						<table class="table table-bordered data-table dataTable" id="DataTables_Table_0">
							<thead>
							<tr role="row">
								<th class="" >产品名称</th>
								<th class="">条形码</th>
								<th class="">卖价</th>
								<th class="">成本</th>
								<th class="">重量</th>
								<th class="">味道</th>
								<th class="">剩余库存</th>
								<th class="">厂家</th>
								<th class="">当前图片</th>
								<th class="">上传图片</th>
								<th class="">修改信息</th>
							</tr>
							</thead>

							<tbody role="alert" aria-live="polite" aria-relevant="all">

							<tr class="gradeA even" v-for="val in productions">
								<td class=" ">{{ val.productName }}</td>
								<td class=" ">{{ val.barcode }}</td>
								<td class=" ">{{ val.salePrice }}</td>
								<td class=" ">{{ val.costPrice }}</td>
								<td class=" ">{{ val.weight }}</td>
								<td class=" ">{{ val.taste }}</td>
								<td class=" ">{{ val.addStockNum }}</td>
								<td class=" ">{{ val.factory }}</td>
								<td class=" ">
									<img :src="val.imgUrl" v-on:click="show_img(val.imgUrl)">
								</td>
								<td class=" " >
									<div class="wrap">
										<span >上传</span>
										<div :class="['upload_img_'+val.id]" class="wrap_inner">上传</div>
									</div>
								</td>
								<td>
									<button class="btn"><router-link :to="'/production/addstock/'+val.id">入库</router-link></button>
									<button class="btn"><router-link :to="'/production/'+val.id">修改</router-link></button>
								</td>
							</tr>
							</tbody>
						</table>

						<pages ref="pages" :url="get_data_url" v-on:receive_data="get_productions" ></pages>
					</div>
				</div>
			</div>
			<div class="show_img" :class="{'active':is_show}" v-on:click="hide_img">
				<img :src="show_img_url" alt="">
			</div>
		</div>
		</div>
	</div>

</template>
<script>
	import pages from "../compents/pages.vue";
	import layout from "../compents/layout.vue";
  export default {
    data() {
      return {
        productions: [],
	      show_img_url: '',
	      is_show: false,
	      page_info: {},
				get_data_url: "/admin/production"
      }
    },
    computed: {
      store: function () {
        return this.$store
      },

    },
    methods:{
      get_productions:function(data){
        this.productions = data;
      },
	    show_img: function (url) {
		    this.show_img_url = url
        this.is_show = true
      },
      hide_img: function () {
        this.is_show = false
      }
    },
//    created: function () {
//
//    },
    components:{
      pages,
      layout,
    },
    updated: function () {
      var self = this
      this.productions.map(function (p) {
        $(".upload_img_"+p.id).uploadFile({
          url:"/admin/production/create_img?barcode="+p.barcode,
          fileName:"file",
          onSuccess:function (files,data,xhr,pd) {
            self.$refs.pages.get_data()
          }
        });
      })
    }
  }
</script>


<style lang="scss" scoped>
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