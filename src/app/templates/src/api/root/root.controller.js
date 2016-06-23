'use strict';

import { list } from './root.model';

export async function index(ctx, next) {
  let data = await list();
  ctx.status = 200;
  ctx.body = data;
  await next();
}
