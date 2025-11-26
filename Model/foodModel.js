const mongoose=require("mongoose")

const foodSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    descryption:{
        type:String,
        required:true
    },
    uploadImages:{
        type:Array,
        required:true
    }
})

const foods =mongoose.model("foods",foodSchema)
module.exports=foods