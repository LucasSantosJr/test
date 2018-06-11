const request = require('supertest');
const assert = require('assert');
const app = require('../index');

describe('POST /register', () => {

  it('It must return a array of dates', () => {
    return request(app)
      .get('/days')
      .expect(200)
      .then(res => {
        assert.equal(res.body instanceof Array, true);
      });
  });

  it('It should return a date', () => {
    return request(app)
      .get('/day/1')
      .expect(200)
      .then(res => {
        assert.equal(res.body.error, undefined);
      });
  });

  it('It should not return a date', () => {
    return request(app)
      .get('/day/something')
      .expect(200)
      .then(res => {
        assert.equal(res.body.error, true);
      });
  });

});