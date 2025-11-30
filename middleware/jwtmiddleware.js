const jwt=require("jsonwebtoken")

const jwtMiddleware =(req,res,next)=>{
    console.log("Inside Jwt Middleware");
    const token =req.headers.authorization.split(" ")[1]
    console.log(token);
    
    try{
        const jwtResponse =jwt.verify(token,process.env.JWtSecretKey )
        console.log(jwtResponse);
        req.payload =jwtResponse.usermail
        next()
        
    }catch (err){
        res.status(500).json("Invalid Token" , err)

    }
    
}
module.exports= jwtMiddleware