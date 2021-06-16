const express = require('express')
const app = express();


const myfunc = (req,res,next) =>{
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time);
    next()
}

app.use( (req,res,next) => {
    const method = req.method;
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time);
    next()
})

app.get('/', myfunc ,(req,res)=>{
    res.send('Home page')
})

app.get('/about', (req,res)=>{
    res.send('About')
})

// run if server is setup correctly.
app.listen(5000, ()=>{
    console.log("Server is listening...");
})