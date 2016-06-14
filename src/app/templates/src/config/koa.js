'use strict';

import config from './index';
import morgan from 'koa-morgan';
import parser from 'koa-bodyparser';
import compress from 'koa-compress';

export default function configKoa(app) {

  app.use(compress());
  app.use(parser({
    strict: false
  }));

  app.use((ctx, next) => {
    ctx.body = ctx.request.body;
    return next();
  });

  app.on('error', err => console.error(err));

  app.use(morgan(config.logType));
}
