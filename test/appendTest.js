const fs = require('fs');
const mock = require('mock-fs');
const assert = require('chai').assert;
const appendComponent = require('../src/append');

const dataToAppend = {
    name : "Dave",
    count : 4
};

beforeEach(function() {
    mock({
        'test': {
            'testData.txt': ''
        }
    });
  });
  afterEach(mock.restore);

describe('Append', () => {
    describe('appendData()', () => {
        it('appendData should take a stringyfied dataObject and append it to the file', () => {
            appendComponent.appendData(dataToAppend, './testData.txt');
            const appendedData = fs.readFileSync('./testData.txt', 'utf8')
            assert.equal(appendedData, dataToAppend);
        });
    });
});

