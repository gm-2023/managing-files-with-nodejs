const {constants, writeFile} = require('fs');

// replaces app.log contents
/* writeFile('./data/newapp.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    // if you want to create a new file but not want to replace a existing file
    {flag: 'wx'},
    (err) => {
        err ? console.log(err) : console.log("file saved!");
    }
); */

writeFile('./data/newapp.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    {
        // mode: constants.S_IWUSR | constants.S_IRUSR  // Owner can read and write
        encoding: 'base64'
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File saved!");
        }
    }
);


// File Flags
/* 
r - read mode
w - write mode
a - append mode
Add on
x - exclusive
+ - open file in multiple modes
s - synchronous
 */