const fs = require('fs');
const separator = ",\n";

const appendData = (dataObject, pathToFile) => {
    const dataString = JSON.stringify(dataObject) + separator;

    fs.appendFileSync(pathToFile, dataString, 'utf8');
};

module.exports = {
    appendData,
    separator
}