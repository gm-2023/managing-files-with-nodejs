const fs = require("fs");

console.log('Opening files...');
for (let i = 0; i < 20; i++) {
  const fd = fs.openSync("./data/app.log");
  console.log(fd);
  fs.closeSync(fd); //make sure to closeSync everytime you openSync
}
