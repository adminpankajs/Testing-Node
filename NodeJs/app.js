const path = require('path')

const filePath = path.join('/module','submodule')
// console.log(filePath);

// Get file base directory
const absolute = path.resolve(__dirname,'module','submodule','test.txt')
console.log(absolute);
