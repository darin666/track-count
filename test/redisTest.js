const mock = require('mock-require');
const Redis = require('ioredis-mock');
const assert = require('chai').assert;

const redisMock = new Redis({
    data: {
        "name" : "Dave",
        "count" : 3}
});

mock('ioredis', redisMock);
const redisComponent = require('../src/redis');

redisGetResult = redisComponent.redisGet('count');

describe('Redis', () => {
    describe('redisGet()', () => {
        it('redisGet should return value of the key', () => {
            assert.equal(redisGetResult, 3);
        });
    });
});