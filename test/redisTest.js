const redisComponent = require('../src/redis');
const Redis = require('ioredis-mock');
const assert = require('chai').assert;

const redis1 = new Redis({
  "name" : "Dave",
  "count" : 3
});

// Results
redisGetResult = redisComponent.redisGet();

describe('Redis', () => {
    describe('redisGet()', () => {
        it('redisGet should return value of the key', () => {
            assert.equal(redisGetResult, 3);
        });
    });
});