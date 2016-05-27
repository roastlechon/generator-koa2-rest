'use strict';

import mount from 'koa-mount';
import root from '../api/root/';

export default function configRoutes(app) {
  app.use(mount('/', root.routes()));

  // List Endpoints Here
}
