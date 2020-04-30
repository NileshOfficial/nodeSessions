const fs = require('fs');
const zipper = require('zlib');

const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./newFile.txt');

readStream.on('data', chunk => {
    writeStream.write(Buffer.from(chunk));
});

const newFileReadStream = fs.createReadStream('./newFile.txt');
const zippedDataStream = fs.createWriteStream("./newFile.txt.gz");
const gzip = zipper.createGzip();
newFileReadStream.pipe(gzip).pipe(zippedDataStream);