'use strict';

const controller = require('./root.controller');
const router = require('koa-router')();

router.get('/', controller.index);

module.exports = router.routes();
