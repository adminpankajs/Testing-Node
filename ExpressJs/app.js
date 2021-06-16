const express = require('express')
const app = express();

const authorize = require('./authorize')

const logger = (req,res,next)=>{
    method = req.method
    url = req.url
    time = Date.now()
    console.log(method,url,time);
    next()
}

app.use([authorize, logger])


app.get('/', (req,res)=>{
    res.send('Home page')
})

app.get('/about', (req,res)=>{
    console.log(req.user);
    res.send('About')
})

// run if server is setup correctly.
app.listen(5000, ()=>{
    console.log("Server is listening...");
})