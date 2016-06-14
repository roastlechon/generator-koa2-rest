'use strict';

import config from '../../config';

export function list() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    });
  });
}
