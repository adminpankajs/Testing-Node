const express = require('express')
const app = express();

const myjson = [
{
    id : 1,
    name: "hello",
    address: "new delhi",
    price : "5,000"
    
},
{
    id : 2,
    name: "shivam",
    address: "Delhi",
    price : "50,000"

}
]

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('<h1>HELLO PAGE</h1><a href="/api/products">products</a><br><a href="/api/special_products">products</a>')
})

app.get('/api/products', (req,res)=>{
    res.json(myjson)
})

app.get('/api/special_products', (req,res)=>{
    const customJson = myjson.map((mydata)=>{
        const {name,address} = mydata;
        return {name, address}
    })
    res.json(customJson)
})

app.get('/api/products/:myID', (req,res)=>{
    const singleProduct = myjson.find((object)=> object.id === Number(req.params.myID))
    if(singleProduct)
    {
        res.json(singleProduct)
    }
    else
    {
        res.status(404).send('Object not exist !!')
    }
})


app.get('/api/v1/query', (req,res)=>{
    let mydata = myjson
    console.log(req.query.search)
    if(req.query.search){
        mydata = myjson.filter((object)=>{
            return object.name.startsWith(req.query.search)
        })
        if(mydata.length < 1)
        {
            return res.status(200).json({success: true, data: []})
        }
        console.log(mydata);
    }
    res.status(200).json(mydata)
})

app.listen(5000, ()=>{
    console.log("Server is listening...");
})