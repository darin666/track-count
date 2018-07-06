const fs = require('fs');
const mock = require('mock-require');
const fsMock = require('mock-fs');
const assert = require('chai').assert;

const dataToAppend = {
    name : "Dave",
    count : 4
};

const mockery = function() {
    fsMock({
        'test': {
        'testData.txt': ''
        }
    });
};

const whatever = function() {
    return beforeEach(mockery);
};

beforeEach(mockery);

afterEach(fsMock.restore);

mock('fs', whatever);
const appendComponent = require('../src/append');

describe('Append', () => {
    describe('appendData()', () => {
        it('appendData should take a stringyfied dataObject and append it to the file', () => {
            appendComponent.appendData(dataToAppend, './testData.txt');
            const appendedData = fs.readFileSync('./testData.txt', 'utf8')
            assert.equal(appendedData, dataToAppend);
        });
    });
});