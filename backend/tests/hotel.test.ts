import request from 'supertest';
import app from '../src/server'; // Import the app

jest.setTimeout(300000); // 30 seconds timeout

describe('Hotel Endpoints', () => {
  it('should fetch all hotels', async () => {
    const res = await request(app).get('/api/hotels');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should book a hotel', async () => {
    const res = await request(app)
      .post('/api/hotels/book/1') // Assuming hotel with ID 1 exists
      .set('Authorization', 'Bearer token'); // Add JWT token from login test
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Hotel booked successfully');
  });
});
