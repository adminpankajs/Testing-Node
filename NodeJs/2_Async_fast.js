const { readFileSync } = require('fs')

const myPrintFun = (mystring)=>{
    console.log(`${mystring}`);
}

const myFor = (num) => {
    let z = 0;
    for (let i = 0; i < 2000000000; i++) {
        z = z+1;
    }
    return (num*num);
}

const myWaitFun = async(num) => {
    let my_val =  await myFor(num);
    console.log(`For loop Done  !!`);
    console.log(`My value is ${my_val}`);
    return my_val;
}

const myAsyncFun = async(name,num) => {
    
    let myVal = myWaitFun(num)
    // myPrintFun(`${name} : ${myVal}`)
    myVal.then((result) => {
        myPrintFun(`${name} : ${result}`)
    })
    console.log("Task Completed");
}
myAsyncFun('shivam',25)
myAsyncFun('pankaj',50)