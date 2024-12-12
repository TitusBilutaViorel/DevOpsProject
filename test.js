const http = require('http');
const assert = require('assert');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
};

const req = http.request(options, (res) => {
  assert.strictEqual(res.statusCode, 200, 'Status code should be 200');
  res.on('data', (chunk) => {
    assert.strictEqual(chunk.toString(), 'Hello Titus, future DevOps Engineer!\n', 'Response should be "Hello Titus, future DevOps Engineer!"');
  });
});

req.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});

req.end();
