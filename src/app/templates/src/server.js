'use strict';

import config from './config';
import configRoutes from './config/routes';
import Koa from 'koa';
import configKoa from './config/koa';

const app = new Koa();
app.port = config.port;

configKoa(app);
configRoutes(app);

export default app;
