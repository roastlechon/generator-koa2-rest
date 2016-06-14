'use strict';

import { normalize } from 'path';

const config = {
  env: process.env.NODE_ENV || 'dev',
  root: normalize(__dirname + '/../../..'),
  ip: process.env.IP || 'localhost',
  port: process.env.PORT || 9000,
  logType: process.env.LOGTYPE || 'dev'
};

export default config;
