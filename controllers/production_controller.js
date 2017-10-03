class productionController extends androidController{
  constructor() {
    super({
      bef_actions:[]
    });
  }
  index(ctx, next) {
    var info = ctx.request.body.productInfo
    console.log(info)
    Production.create(JSON.parse(info)).then(function (p) {
      // console.log(p);
    })
  }

}
module.exports = productionController

