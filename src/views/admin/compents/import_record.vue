<template>

	<div class="container-fluid">
		<hr>
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
						<h5>入库记录</h5>
					</div>
					<div class="widget-content nopadding">
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
        records: []
      }
    },
    computed: {
      store: function () {
        return this.$store
      },

    },
    methods:{
      import_record:function(){
        var self = this;
        $.get('/admin/import_records',function (records) {
          self.records = records;
        })
      }
    },
    created: function () {
      this.import_record()
    },
    updated: function () {

    }
  }
</script>


<style lang="scss" scoped>


</style>

