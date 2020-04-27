var fs = require('fs');
var fileData = fs.readFile('./file', null, (err, data) => {
    console.log(data);
});
console.log(fileData);
console.log("File is being read");