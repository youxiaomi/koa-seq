global.sellController=(function () {


  return {
    async create(ctx, next){
      var productionList = JSON.parse(ctx.request.query.productionList);
      var totalPrice = JSON.parse(ctx.request.query.totalPrice);
      const sellList = await SellRecord.create({
        totalQuality:productionList.length,
        totalPrice: totalPrice,
        activeUser: ctx.session.user_id,
      })

      for(let i=0;i<productionList.length;i++){
        let p = await Production.findOne({where:{barcode:productionList[i]}});
        await Production.update({
          addStockNum: --p.addStockNum
        },{
          where:{barcode:productionList[i]}
        });

        await SellRecordDetail.create({
          sellRecordId: sellList.id,
          barcode: productionList[i]
        })
      }

      ctx.body = true
    },
    async index(ctx, next){
      var page = ctx.query.page;
      let limit = 15,offset = (ctx.query.page - 1) * limit;
      var sells = await SellRecord.findAll({offset: offset,limit: limit, order: [['id', 'DESC']]});

      for(let i=0;i<sells.length;i++){
        let activeUser = await User.findById(sells[i].activeUser);
        sells[i].activeUser = activeUser.name
      }
      ctx.body = _.extend({datas: sells},helper.pages_fn(Math.ceil(await SellRecord.count() / limit), page));
    },
    async show(ctx, next){
      var sell = await SellRecordDetail.findAll({where:{sellRecordId: ctx.params.id }})

      for(let i = 0;i<sell.length;i++){
        var production = await Production.findOne({where:{barcode: sell[i].barcode}})
        _.extend(sell[i],production)
      }
      ctx.body = sell
    }


  }
})()


