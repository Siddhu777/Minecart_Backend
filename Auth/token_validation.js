const {verify} = require('jsonwebtoken')

module.exports = {
    checkToken: (req,res,next)=>{
        let token = req.get("Authorization")
        if(token){
            //remove bearer token and  start from 7index
            token = token.slice(7)  //bearer (6character +1 =7 index)
            verify(token, "qwe1234",(err,decode)=>{
                if(err){
                    res.json({
                        success:0,
                        message:"Invalid token",
                        
                    })
                }else{  
                    // req.result = decode;
                    console.log("sucess....")
                    next();
                }
            })
        }else{
            res.json({
                success:0,
                message:"Access deinied unauthorized user"
            })
        }
    }
}