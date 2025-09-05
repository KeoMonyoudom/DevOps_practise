const request = require('supertest');
const app = require('./app');

describe('API tests', () => {
  it('GET /api/hello should return Hello World', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello World' });
  });

  it('POST /api/user should create user', async () => {
    const res = await request(app)
      .post('/api/user')
      .send({ name: 'John Doe' });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id', 1);
    expect(res.body).toHaveProperty('name', 'John Doe');
  });

  it('POST /api/user without name should return 400', async () => {
    const res = await request(app).post('/api/user').send({});
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Name required');
  });
});
