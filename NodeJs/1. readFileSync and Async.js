const {readFile, writeFile} = require('fs')

console.log('start');
readFile('./module/subModule/test_1.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }
    const result_1 = result
    readFile('./module/subModule/test_2.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const result_2 = result
        // console.log(`Ans is : ${result_1} ${result_2}`)
        writeFile('./module/subModule/test.txt',`\nMy New Result is : ${result_1} ${result_2}`,{flag : 'a'},(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log('Writing is done')
        })
    })
})

console.log('done with task')
console.log('starting the next')