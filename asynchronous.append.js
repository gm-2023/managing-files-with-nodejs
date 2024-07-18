// const {writeFile} = require('fs');

// // replaces app.log contents
// writeFile('./data/app.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
//     {flag: 'a'},
//     (err) => {
//         err ? console.log(err) : console.log("file saved!");
//     }
// );

// other option
const {appendFile} = require('fs');

// appendFile defaults the flag to 'a'
appendFile('./data/app.log', '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    (err) => {
        err ? console.log(err) : console.log("file saved!");
    }
);