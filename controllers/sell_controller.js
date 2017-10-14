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


  }
})()


