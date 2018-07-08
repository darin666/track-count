const fs = require('fs');
const fsMock = require('mock-fs');
const assert = require('chai').assert;

const appendComponent = require('../src/append');

const dataToAppend = {
    name : "Dave",
    count : 4
};

const stringifiedDataWithSeparator = JSON.stringify(dataToAppend) + appendComponent.separator;

beforeEach(() => {
    fsMock({
        'test': {
            'testData.txt': ''
        }
    });
});
afterEach(fsMock.restore);

describe('Append', () => {
    describe('appendData()', () => {
        it('appendData should take a stringyfied dataObject and append it to the file', () => {
            appendComponent.appendData(dataToAppend, './test/testData.txt');
            const appendedData = fs.readFileSync('./test/testData.txt', 'utf8');
            assert.equal(appendedData, stringifiedDataWithSeparator);
        });
    });
});