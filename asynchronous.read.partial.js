const {convertCsv} = require('./csv.parse');
const {open, read} = require('fs');
// const {promisify} = require('util');

// const readFile = promisify(fs.readFile);

open("./data/pulitzer-circulation-data.csv", (err, fd) => {
    // fd referes to a fild descriptor
    const buffer = Buffer.alloc(200);
    read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
        console.table(convertCsv(buff.toString()));
    })
});