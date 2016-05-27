'use strict';

import config from './index';
import morgan from 'koa-morgan';

export default function configKoa(app) {
   app.use(morgan(config.logType));
}
