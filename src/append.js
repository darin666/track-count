const fs = require('fs');

const appendData = (dataObject, pathToFile) => {
    const separator = ",\n";
    const dataString = JSON.stringify(dataObject) + separator;

    fs.appendFile(pathToFile, dataString, 'utf8', (err) => {
        if (err) throw err;
    });
};

module.exports.appendData = appendData;