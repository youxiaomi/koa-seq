class applicationController {
  constructor() {
    this.index = function (ctx, next) {
      ctx.body = 'Hello Wsorld';
    }
  }
  before_action(){

  }
}
module.exports = applicationController


