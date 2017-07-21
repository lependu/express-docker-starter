import test from 'tape';
import request from 'supertest';
import app from '../src/index';
import { name, version } from '../package.json';

test('GET /', (t) => {
  t.plan(3);
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      let expected = {
        name,
        version
      };
      t.error(err, 'returns no error');
      t.equal(res.status, 200, 'status code: 200');
      t.deepEqual(res.body, expected, 'returns body');
    });
});

test.onFinish(() => process.exit(0));
