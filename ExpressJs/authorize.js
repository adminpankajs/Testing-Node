const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user === 'shivam')
    {
        req.user = {name:'shivam', id: 5}
        next()
    }
    else
    {
        res.status(401).send('User unauthorized')
    }
}

module.exports = authorize