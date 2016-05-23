'use strict';

const config = require('../../config/environment');

exports.list = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    });
  });
};
