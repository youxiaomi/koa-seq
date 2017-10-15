<template>
	<div>
		<div id="header">
			<h1>狗蛋超市</h1>
		</div>

		<div id="user-nav" class="navbar navbar-inverse">
			<ul class="nav">
				<li class="dropdown" id="profile-messages"><a title="" href="#" data-toggle="dropdown"
				                                              data-target="#profile-messages" class="dropdown-toggle"><i
					class="icon icon-user"></i> <span class="text">Welcome User</span><b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li><a href="#"><i class="icon-user"></i> My Profile</a></li>
						<li class="divider"></li>
						<li><a href="#"><i class="icon-check"></i> My Tasks</a></li>
						<li class="divider"></li>
						<li><a href="login.html"><i class="icon-key"></i> Log Out</a></li>
					</ul>
				</li>
				<li class="dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages"
				                                           class="dropdown-toggle"><i class="icon icon-envelope"></i> <span
					class="text">Messages</span> <span class="label label-important">5</span> <b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li><a class="sAdd" title="" href="#"><i class="icon-plus"></i> new message</a></li>
						<li class="divider"></li>
						<li><a class="sInbox" title="" href="#"><i class="icon-envelope"></i> inbox</a></li>
						<li class="divider"></li>
						<li><a class="sOutbox" title="" href="#"><i class="icon-arrow-up"></i> outbox</a></li>
						<li class="divider"></li>
						<li><a class="sTrash" title="" href="#"><i class="icon-trash"></i> trash</a></li>
					</ul>
				</li>
				<li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">Settings</span></a></li>
				<li class=""><a title="" href="login.html"><i class="icon icon-share-alt"></i> <span class="text">Logout</span></a>
				</li>
			</ul>
		</div>
		<div id="search">
			<input type="text" placeholder="Search here..."/>
			<button type="submit" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
		</div>

		<div id="sidebar">
			<a href="#" class="visible-phone"><i class="icon icon-home"></i> Dashboard</a>
			<ul>
				<li class="active"><a href="index.html"><i class="icon icon-home"></i> <span>产品列表</span></a></li>
			</ul>
		</div>

		<div id="content">
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
									<td class=" " ><div  :class="['upload_img_'+val.id] ">上传</div></td>
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
    created: function () {
      var self=this;
			$.get('/production/index',function (productions) {
				self.productions = productions;
      })
    },
	  updated: function () {

      this.productions.map(function (p) {
        $(".upload_img_"+p.id).uploadFile({
          url:"/admin/production/create_img",
          fileName:"myfile"
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
</style>