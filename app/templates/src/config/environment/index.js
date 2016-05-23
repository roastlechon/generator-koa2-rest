'use strict';

const path = require('path');
const env = require('./' + process.env.NODE_ENV + '.js') || {};

let base = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname + '/../../..'),
  ip: process.env.IP || 'localhost',
  port: process.env.PORT || 9000,
  logType: process.env.LOGTYPE || 'dev'
};

module.exports = Object.assign(base, env);
