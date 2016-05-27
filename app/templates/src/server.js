'use strict';

import 'babel-polyfill';
import config from './config';
import configRoutes from './config/routes';
import Koa from 'koa';
import configKoa from './config/koa';

const app = new Koa();

configRoutes(app);
configKoa(app);

app.listen(config.port, config.ip, () => {
  console.log(`Koa server listening on ${config.port}, in ${config.env} mode`);
});
