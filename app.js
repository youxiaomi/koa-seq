var Koa = require('koa');
const session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var KeyGrip = require("keygrip");

var path = require('path');
var staticCache = require('koa-static-cache')


const app = new Koa();





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






require('./config/routers.js')(app);
require('./bin/handle_model.js');


app.use(staticCache(path.join(__dirname, 'public'), {
  maxAge: 365 * 24 * 60 * 60
}))


app.use(staticCache(path.join(__dirname, 'public/static'), {
  maxAge: 365 * 24 * 60 * 60
}))





app.listen(4000);


