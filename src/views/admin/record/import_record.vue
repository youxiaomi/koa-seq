<template>

	<div>
		<layout></layout>
		<div id="content">
			<div class="container-fluid">
				<div class="widget-box">
					<div class="widget-title"><span class="icon"><i class="icon-th"></i></span>
						<h5>入库记录</h5>
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
							<table class="table table-bordered table-striped">
								<thead>
								<tr>
									<th class="" >产品名称</th>
									<th class="">条形码</th>
									<th class="">卖价</th>
									<th class="">成本</th>
									<th class="">重量</th>
									<th class="">味道</th>
									<th class="">加入库存</th>
									<th class="">厂家</th>
									<th class="">操作人</th>
								</tr>
								</thead>
								<tbody>
								<tr class="odd gradeX" v-for="val in records">
									<td class=" ">{{ val.productName }}</td>
									<td class=" ">{{ val.barcode }}</td>
									<td class=" ">{{ val.salePrice }}</td>
									<td class=" ">{{ val.costPrice }}</td>
									<td class=" ">{{ val.weight }}</td>
									<td class=" ">{{ val.taste }}</td>
									<td class=" ">{{ val.addStockNum }}</td>
									<td class=" ">{{ val.factory }}</td>
									<td class=" ">{{ val.activeUser }}</td>
								</tr>
								</tbody>
							</table>
							<pages :url="'/admin/import_records'" v-on:receive_data="import_record" ></pages>
						</div>
					</div>
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
        records: []
      }
    },
    computed: {
      store: function () {
        return this.$store
      },

    },

    methods:{
      import_record:function(records){
          this.records = records;
      }
    },
    components:{
      pages,
      layout,
    },
    created: function () {

    },
    updated: function () {

    }
  }
</script>


<style lang="scss" scoped>


</style>

