// test/eventValidation.test.ts

import request from 'supertest';
import app from '../src/app';

const baseUrl = '/api/v1/events';

describe('POST /api/v1/events - Working Validation Tests', () => {
  const validEvent = {
    name: 'Tech Conference',
    date: '2026-12-01T10:00:00.000Z',
    capacity: 100,
    category: 'conference',
    status: 'active',
  };

  
  it('should reject extra field documentPath', async () => {
    const res = await request(app)
      .post(baseUrl)
      .send({ ...validEvent, documentPath: '/events/test' });
    expect(res.status).toBe(400);
    expect(res.body.message).toContain('"documentPath" is not allowed');
  });

  it('should fail when required field is missing', async () => {
    const { name, ...partialEvent } = validEvent;
    const res = await request(app).post(baseUrl).send(partialEvent);
    expect(res.status).toBe(400);
    expect(res.body.message).toContain('"name" is required');
  });
});