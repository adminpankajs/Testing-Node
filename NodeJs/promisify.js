const { readFile, writeFile } = require('fs').promises;

// const util = require('util');

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFile('./module/subModule/test_1.txt', 'utf8')
        const second = await readFile('./module/subModule/test_2.txt', 'utf8')
        console.log(first, second);
    }
    catch (error){
        console.log(error);
    }
}

start();