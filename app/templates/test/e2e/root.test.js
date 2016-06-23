'use strict';

import request from 'supertest';
import app from '../../src/server';
import config from '../../src/config';

describe('root api', () => {
  it('should return 200 and config json', done => {
    request(app.listen())
      .get('/')
      .expect(200, config)
      .end(done);
  });
});
