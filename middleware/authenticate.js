const jwt = require('jsonwebtoken');
// const secretKey = '123456';

const authenticate = function(req,res,next){
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(400).json('No cookies Found')
        }
        const decoded = jwt.verify(token,process.env.KEY);
        if(!decoded){
            return res.status(400).json('Token is invalid')
        }
        req.userId = decoded.id
        next()
    }
    catch(error){
        return res.status(400).json(error)
    }
}

module.exports = authenticate