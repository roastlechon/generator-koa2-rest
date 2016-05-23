'use strict';

const config = require('./config/environment');
const routes = require('./config/routes');
const Koa = require('koa');
const app = new Koa();

require('./config/routes')(app);
require('./config/koa')(app);

app.listen(config.port, config.ip, () => {
  console.log(`Koa server listening on ${config.port}, in ${config.env} mode`);
});
