<template>
	<div class="container-fluid">
		<div class="widget-box">
			<div class="widget-title"><span class="icon"><i class="icon-th"></i></span>
				<h5>Data table</h5>
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
								<img :src="val.imgUrl" >
							</td>
							<td class=" " ><div class="wrap">
								<span >上传</span>
								<div :class="['upload_img_'+val.id]" class="wrap_inner">上传</div>
							</div></td>
						</tr>
						</tbody>
					</table>
					<div class="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix">
						<div class="dataTables_filter" id="DataTables_Table_0_filter"><label>Search: <input type="text"
						                                                                                    aria-controls="DataTables_Table_0"></label>
						</div>
						<div
							class="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers"
							id="DataTables_Table_0_paginate"><a tabindex="0"
						                                      class="first ui-corner-tl ui-corner-bl fg-button ui-button ui-state-default ui-state-disabled"
						                                      id="DataTables_Table_0_first">First</a><a tabindex="0"
						                                                                                class="previous fg-button ui-button ui-state-default ui-state-disabled"
						                                                                                id="DataTables_Table_0_previous">Previous</a><span><a
							tabindex="0" class="fg-button ui-button ui-state-default ui-state-disabled">1</a><a tabindex="0"
						                                                                                      class="fg-button ui-button ui-state-default">2</a><a
							tabindex="0" class="fg-button ui-button ui-state-default">3</a><a tabindex="0"
						                                                                    class="fg-button ui-button ui-state-default">4</a><a
							tabindex="0" class="fg-button ui-button ui-state-default">5</a></span><a tabindex="0"
						                                                                           class="next fg-button ui-button ui-state-default"
						                                                                           id="DataTables_Table_0_next">Next</a><a
							tabindex="0" class="last ui-corner-tr ui-corner-br fg-button ui-button ui-state-default"
							id="DataTables_Table_0_last">Last</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
  export default {
    data() {
      return {
        productions: []
      }
    },
    computed: {
      store: function () {
        return this.$store
      },

    },
    methods:{
      get_productions:function(){
        var self = this;
        $.get('/admin/production',function (productions) {
          self.productions = productions;
        })
      }
    },
    created: function () {
      this.get_productions()

    },
    updated: function () {
      var self = this
      this.productions.map(function (p) {
        $(".upload_img_"+p.id).uploadFile({
          url:"/admin/production/create_img?barcode="+p.barcode,
          fileName:"file",
          onSuccess:function (files,data,xhr,pd) {
            self.get_productions()
          }
        });
      })
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
</style>