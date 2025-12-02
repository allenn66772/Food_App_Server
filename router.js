const express =require("express")
const { registerController, loginController } = require("./controller/userController")
const jwtMiddleware = require("./middleware/jwtmiddleware")
const multerConfig = require("./middleware/imgMulterMiddleware")
const { addfoodController, getAllFoodController, getuserAddedFoodController, getHotelFoodController } = require("./controller/foodController")

const router=express.Router()
//register
router.post("/register",registerController)

//login
router.post("/login",loginController)

// hotel owners

//ADD Food
router.post("/add-food",jwtMiddleware,multerConfig.array("uploadImages",10),addfoodController)

//GET Food
router.get("/all-foods",jwtMiddleware,getAllFoodController)
//get user added food
router.get("/hotel-added-food",jwtMiddleware,getHotelFoodController)
module.exports=router