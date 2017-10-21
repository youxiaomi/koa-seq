<template>

	<div class="container-fluid">
		<hr>
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
						<h5>订单详情</h5>
					</div>
					<div class="widget-content nopadding">
						<table class="table table-bordered table-striped">
							<thead>
							<tr>
								<th class="" >订单时间</th>
								<th class="" >产品名字</th>
								<th class="" >价格</th>
								<th class="" >重量</th>
								<th class="" >味道</th>
								<th class="" >厂家</th>
								<th class="" >操作人</th>

							</tr>
							</thead>
							<tbody>
							<tr class="odd gradeX" v-for="val in records">
								<td class=" ">{{ val.createdAt }}</td>
								<td class=" ">{{ val.productName }}</td>
								<td class=" ">{{ val.salePrice }} 元</td>
								<td class=" ">{{ val.weight }}</td>
								<td class=" ">{{ val.taste }}</td>
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
      sell_show:function(){
        var self = this;
        $.get('/admin/sell/'+this.$route.query.id,function (records) {
          self.records = records;
        })
      }
    },
    created: function () {
      this.sell_show();
    },
    updated: function () {

    }
  }
</script>


<style lang="scss" scoped>


</style>

