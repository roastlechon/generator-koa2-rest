'use strict';

const config = require('./environment');
const morgan = require('koa-morgan');

module.exports = (app => {
   app.use(morgan(config.logType));
});
