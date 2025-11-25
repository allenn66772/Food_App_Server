const mongoose=require("mongoose")
const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(res=>{
    console.log("mongooge Connected succesfully");
    
}).catch(err=>{
    console.log(`something went wront ${err}`);
    
})