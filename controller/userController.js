const users=require("../Model/userModel")
const jwt=require("jsonwebtoken")

//resgister
exports.registerController=async(req,res)=>{
    console.log("Inside Register Controll");
    const{username,email,password}=req.body
    console.log(username,email,password);
    try{
        const existinguser=await users.findOne({email})
        if (existinguser){
            res.status(404).json("User Already Exist Please Login");
            
        }else{
            const newUser=new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(error){
        res.status(500).json(error)
    }

    
    
}

//login
exports.loginController=async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password);
    try{
        const existinguser=await users.findOne({email})
        if(existinguser){
            if(existinguser.password==password){
                const token=jwt.sign({usermail:existinguser.email},process.env.JWtSecretKey)
                res.status(200).json({existinguser,token})
            }else{
                res.status(401).json(`invalid credentials`)
            }
        }else{
            res.status(404).json(`user not found please register`)
        }
    }catch(error){
        res.status(500).json(error)
    }
}