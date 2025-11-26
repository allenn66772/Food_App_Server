const express =require("express")
const { registerController, loginController } = require("./controller/userController")
const jwtMiddleware = require("./middleware/jwtmiddleware")
const multerConfig = require("./middleware/imgMulterMiddleware")
const { addfoodController } = require("./controller/foodController")

const router=express.Router()
//register
router.post("/register",registerController)

//login
router.post("/login",loginController)

// hotel owners

//ADD Food
router.post("/add-food",jwtMiddleware,multerConfig.array("uploadImages",1),addfoodController)

module.exports=router