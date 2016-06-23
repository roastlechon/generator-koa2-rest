'use strict';

import 'babel-polyfill';
import config from './config';
import configRoutes from './config/routes';
import Koa from 'koa';
import configKoa from './config/koa';

const app = new Koa();

configKoa(app);
configRoutes(app);

// http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
// Check for module parent and export app, otherwise app.listen()
// This is so that it is easy to test application or use it with clustering
if (!module.parent) {
  app.listen(config.port, config.ip, () => {
    console.log(`Koa server listening on ${config.port}, in ${config.env} mode`);
  });
} else {
  module.exports = app;
}
