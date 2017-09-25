class applicationController {
  constructor() {
    this.index = function (ctx, next) {
      ctx.body = 'Hello Wssssssssssorld';
      // ctx.cookies.set('name', '33ssi', { signed: true });

      ctx.session.test_session = 'ssssssa安卓'
      ctx.session.test_session2 = 'ssssssa安卓2'

      var session = ctx.session.test_session;
      var session2 = ctx.session.test_session2;

      console.log(session)
      console.log(session2)
    }
  }
  before_action(){

  }
}
module.exports = applicationController


