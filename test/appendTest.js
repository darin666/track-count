const fs = require('fs');
const mock = require('mock-require');
const fsMock = require('mock-fs');
const assert = require('chai').assert;

const dataToAppend = {
    name : "Dave",
    count : 4
};

beforeEach(function() {
    fsMock({
        'test': {
        'testData.txt': ''
        }
    });
});
afterEach(fsMock.restore);

mock('fs', fsMock);
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