'use strict';

import config from '../../config';
import { list } from './root.model';

export function index(ctx, next) {
  return list()
    .then(data => {
      ctx.status = 200;
      ctx.body = data;
      return next();
    });
}
