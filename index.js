//1. import express
const express=require("express")
//7.import dotenv
require('dotenv').config()
//8.import router
const router=require("./router")
//11.import connection
require("./db/connection")

//5.import cors
const cors=require('cors')


//2. create server
const foodAppserver = express()
//6. tell the server to use cors
foodAppserver.use(cors())

//10.parse request
foodAppserver.use(express.json())

//9. tell the  server to use router
foodAppserver.use(router)


//3. create port
 const PORT=3000

//4. tell the server to listen
foodAppserver.listen(PORT,()=>{
    console.log(`Food app successfully running at port number ${PORT}`);
    
}) 

foodAppserver.get("/",(req,res)=>{
    res.status(200).send(`food app started running`)

})