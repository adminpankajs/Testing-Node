const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {   
        let text = 'hello';
        res.write( `${text}`);
        res.end('Welcome ji');
    }
    if(req.url === '/about')
    {
        res.end('You are in the about');
    }
    res.end('Error ho gy !!')
    
})

server.listen(5000,()=>{
    console.log(`Server is listening....`);
})