var Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var KeyGrip = require("keygrip");
// const logger = require('koa-logger')
const log4js = require('log4js');



const app = new Koa();
const router = new Router();

log4js.configure({
  appenders: {
    cheese: { type: 'file', filename: 'cheese.log' },
    console: { type: 'console' },
  },
  categories: { default: { appenders: ['cheese','console'], level: 'ALL' } },
  replaceConsole: true
});

app.keys = ['mima'];
const CONFIG = {
  key: 'koa_session',
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};

app.use(session(CONFIG, app));
app.use(bodyParser());

const logger = log4js.getLogger('cheese');







require('./config/routers.js')(router);
require('./bin/handle_model.js');



app.use(serve('./public'));

app
  .use(router.routes())
  .use(router.allowedMethods());






app.listen(4000);


