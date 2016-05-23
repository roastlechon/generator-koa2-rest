'use strict';

const config = require('../../config/environment');
const rootModel = require('./root.model');

exports.index = (ctx, next) => {
  return rootModel.list()
    .then(data => {
      ctx.status = 200;
      ctx.body = data;
      return next();
    });
};
