'use strict';

import { index } from './root.controller';
import router from 'koa-router';

const root = router();

root.get('/', index);

export default root;
