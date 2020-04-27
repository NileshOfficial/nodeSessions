var fs = require('fs');
var fileData = fs.readFileAsync('./file');
console.log(fileData);
console.log("File Reading Complete");