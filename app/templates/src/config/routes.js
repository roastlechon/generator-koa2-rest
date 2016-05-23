'use strict';

const mount = require('koa-mount');

module.exports = (app => {
  app.use(mount('/', require('../api/root')));

  // List Endpoints Here
  // app.use(mount('/test', require('../api/test')));
});
