const request = require('supertest');
const app = require('../app');

describe('App', () => {
  it('has the default page', (done) => {
    request(app)
      .get('/')
      .expect(/Welcome to Feedback API/, done);
  });
}); 
