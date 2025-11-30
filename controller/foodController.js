const foods=require("../Model/foodModel")


//add food 
exports.addfoodController=async(req,res)=>{
    console.log("Inside food controller");
    const{name,price,category,descryption}=req.body

    var uploadImages=[]
    req.files.map((item)=>uploadImages.push(item.filename))

    const usermail=req.payload
    console.log(name,price,category,descryption,uploadImages);
    

    try{
        const existingfood= await foods.findOne({name,usermail})
        if(existingfood){
            res.status(401).json("Already added this dish .... Add NEW")
        }else{
            const newFood = new foods({
            name,
            price,
            category,
            descryption,
            uploadImages,
            usermail,
        });

        await newFood.save();
            res.status(200).json(newFood)
        }
    }catch(error){
        res.status(500).json(error)
        console.log(error);
        
        
        
    }
}

//get home books
exports.getAllFoodController = async (req, res) => {
  console.log("Inside all food controller");
  try {
    const allFoods = await foods.find().sort({ _id: -1 }).limit(4);
    res.status(200).json(allFoods);
  } catch (error) {
    res.status(500).json(error);
  }
};


//get food  to user
// exports.getAllfoodController=async(req,res)=>{
//     console.log("Inside Get Food Controller");
//     const searchKey =req.query.search
//     const  usermail = req.payload

//     const query = {
//   name: { $regex: searchKey || "", $options: "i" },
//    usermail: { $ne: usermail }
//   };

//   try{
//     const result=await foods.find(query)
//     res.status(200).json(result)
   
    
    

//   }catch(error){
//     res.status(500).json(error)
    
//   }
   
// }