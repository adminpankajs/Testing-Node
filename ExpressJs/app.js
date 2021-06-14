const http = require('http')

const {readFileSync} = require('fs');
const { Console } = require('console');

// get all files
const homePage = readFileSync('./templates/index.html')
const homeCss = readFileSync('./templates/main.css')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/')
    {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(req.url==='/main.css')
    {
        res.writeHead(200, {'content-type' : 'text/css'})
        res.write(homeCss)
        res.end()
    }
    else
    {
        res.writeHead(404)
        res.write('<h1>Not Found</h1>')
        res.end()
    }
})

server.listen(5000)