'use strict';

import chai from 'chai';
import request from 'supertest';
import app from '../../src/server';

describe('root api', () => {

  it('should return 200 and empty array', done => {
    request(app.listen())
      .get('/')
      .expect(200, [])
      .end(done);
  });

});
