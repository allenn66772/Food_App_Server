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

//get home food
exports.getAllFoodController = async (req, res) => {
  console.log("Inside all food controller");

  const search = req.query.search || ""; // ← read search keyword

  try {
    const allFoods = await foods.find({
      name: { $regex: search, $options: "i" } // case-insensitive search
    })
    .sort({ _id: -1 });

    res.status(200).json(allFoods);
  } catch (error) {
    res.status(500).json(error);
  }
};



// get food  to user
exports.getHotelFoodController = async (req, res) => {
  console.log("Inside Get hotel added food controller");
  const usermail = req.payload;
  const query = {
    usermail: { $eq: usermail },
  };

  try {
    const hotelFoods = await foods.find(query);
    res.status(200).json(hotelFoods);
    console.log(hotelFoods);
    
  } catch (error) {
    console.log(error);
  }
};