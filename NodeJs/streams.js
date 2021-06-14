const { createReadStream } = require('fs');

const stream = createReadStream('./module/subModule/test.txt',{
    highWaterMark: 500,
    encoding: 'utf8',
});

stream.on('data', (result)=>{
    console.log(result);
})

stream.on('error',(err)=> {
    console.log(err);
})