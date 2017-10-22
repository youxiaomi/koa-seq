
<template>
	<div class="container-fluid">
		<div class="widget-box">
			<div class="widget-title"><span class="icon"><i class="icon-th"></i></span>
				<h5>售卖记录</h5>
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
							<th class="" >订单时间</th>
							<th class="" >总价格</th>
							<th class="" >数量</th>
							<th class="" >操作人</th>
							<th class="" >详情</th>

						</tr>
						</thead>
						<tbody>
						<tr class="odd gradeX" v-for="val in records">
							<td class=" ">{{ val.createdAt }}</td>
							<td class=" ">{{ val.totalPrice }} 元</td>
							<td class=" ">{{ val.totalQuality }}</td>
							<td class=" ">{{ val.activeUser }}</td>
							<td class=" ">
								<router-link :to="'/sell-show?id='+val.id"><button class="btn">详情</button></router-link>
							</td>

						</tr>
						</tbody>
					</table>

					<pages :url="'/admin/sell'" v-on:receive_data="sell_record" ></pages>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  import pages from "../page_compents/pages.vue";
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
      sell_record:function(records){
	      this.records = records;
      }
    },
	  components:{
      pages,
	  },
    created: function () {

    },
    updated: function () {

    }
  }
</script>


<style lang="scss" scoped>


</style>

