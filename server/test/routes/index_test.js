'use strict';

const request = require('supertest');
const app = require('../../app');

describe('This REST API', () => {

  it('Returns Hello World as JSON', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .expect({message: 'Hello World'})
      .expect('Content-Type', /json/, done)

  });

});

