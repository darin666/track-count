const fsMock = require('mock-fs');
const assert = require('chai').assert;

const dataToAppend = {
    name : "Dave",
    count : 4
};

const fs = require('fs');
const appendComponent = require('../src/append');
fsMock({
    'test': {
        'testData.txt': ''
    }
});

const stringifiedDataWithSeparator = JSON.stringify(dataToAppend + appendComponent.separator);

describe('Append', () => {
    describe('appendData()', () => {
        it('appendData should take a stringyfied dataObject and append it to the file', () => {
            appendComponent.appendData(dataToAppend, './test/testData.txt');
            const appendedData = fs.readFileSync('./test/testData.txt', 'utf8');
            assert.equal(stringifiedDataWithSeparator, appendedData);
        });
    });
});