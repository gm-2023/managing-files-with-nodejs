const {convertCsv} = require('../csv.parse');
const {readFile} = require('fs');

module.exports.read = () => {
readFile("./data/pulitzer-circulation-data.csv", "utf8", (err,data) => {
    // if you do not specify an encoding when reading a file, the system defaults to a buffer of individual bytes which does not have a split function
    // always remember to specify coding
    
    if(err){
        console.log(`There was a problem with the file ${err}`);
        return;
    }

    const vals = convertCsv(data);

    console.table(vals);
});
}