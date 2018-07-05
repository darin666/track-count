const mock = require('mock-require');
const Redis = require('ioredis-mock');
const assert = require('chai').assert;

const initData = {
    name : "Dave",
    count : 4
};

const redisClientMock = new Redis({data : initData});

const RedisMock = function() {
    return redisClientMock;
};

mock('ioredis', RedisMock);
const redisComponent = require('../src/redis');

describe('Redis', () => {
    describe('redisGet()', () => {
        it('redisGet should return value of the key', async () => {
            const redisGetResult = await redisComponent.redisGet('count');
            assert.equal(redisGetResult, initData.count);
        });
    });

    describe('redisIncrby()', () => {
        it('when input is a number redisIncrby should increase value of the key', async () => {
            await redisComponent.redisIncrby('count', 1);
            const redisGetResult = await redisComponent.redisGet('count');
            assert.equal(redisGetResult, initData.count + 1);
        });
    });
});