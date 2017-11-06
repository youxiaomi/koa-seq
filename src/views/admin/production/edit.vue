<template>
  <div>
    <layout></layout>
    <div id="content">
      <div id="content-header">
        <div id="breadcrumb"> <a href="index.html" class="tip-bottom" data-original-title="Go to Home"><i class="icon-home"></i> Home</a> <a href="#" class="tip-bottom" data-original-title="">Form elements</a> <a href="#" class="current">Common elements</a> </div>
        <h1>商品修改</h1>
      </div>
      <div class="container-fluid">
        <hr>
        <div class="row-fluid">
          <div class="span6">
            <div class="widget-box">
              <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
                <h5>修改</h5>
              </div>
              <div class="widget-content nopadding">
                <form class="form-horizontal">
                  <div class="control-group">
                    <label class="control-label">条形码</label>
                    <div class="controls">
                      <span>{{ production.barcode}}</span>
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">商品名称</label>
                    <div class="controls">
                      <input type="text"  v-model="production.productName">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">卖价</label>
                    <div class="controls">
                      <input type="text"  v-model="production.salePrice">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">陈本</label>
                    <div class="controls">
                      <input type="text"  v-model="production.costPrice">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">重量</label>
                    <div class="controls">
                      <input type="text"  v-model="production.weight">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">味道</label>
                    <div class="controls">
                      <input type="text"  v-model="production.taste">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">厂家</label>
                    <div class="controls">
                      <input type="text"  v-model="production.factory">
                    </div>
                  </div>
                  <div class="control-group">
                    <label class="control-label">剩余库存</label>
                    <div class="controls">
                      <span>{{ production.addStockNum }}</span>
                    </div>
                  </div>
                  <div class="form-actions" style="text-align: right">
                    <button type="button" class="btn btn-success" v-on:click="save">保存</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import layout from "../compents/layout.vue";
  export default {
    data() {
      return {
        production:{}
      }
    },
    computed: {
      store: function () {
        return this.$store
      },

    },
    methods:{
      get_production: function () {
        var self = this
        $.get('/admin/production/'+this.$route.params.id, function (data) {
          self.production = data.production;
        })
      },
      save: function () {
        var self = this
        $.ajax({
          url:'/admin/production/'+this.$route.params.id,
          type: "put",
          data: this.production,
          success: function (data, status) {
            alert('修改成功')
            self.get_production()
          }
        })
      }
    },
    created: function () {
      this.get_production()
    },
    components:{
      layout
    },
    updated: function () {

    }
  }
</script>


<style lang="scss" scoped>

</style>