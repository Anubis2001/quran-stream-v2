import request from 'supertest';
import app from '../../src/app';

describe('Integration Tests for Stream', () => {
    it('should return 200 for the stream endpoint', async () => {
        const response = await request(app).get('/api/stream');
        expect(response.status).toBe(200);
    });

    it('should return audio file for valid Sheikh and chapter', async () => {
        const response = await request(app).get('/api/stream/sheikh1/1');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toBe('audio/mpeg');
    });

    it('should return 404 for invalid Sheikh', async () => {
        const response = await request(app).get('/api/stream/sheikh3/1');
        expect(response.status).toBe(404);
    });

    it('should return 404 for invalid chapter', async () => {
        const response = await request(app).get('/api/stream/sheikh1/99');
        expect(response.status).toBe(404);
    });
});