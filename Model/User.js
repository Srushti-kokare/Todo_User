const mongoose =require('mongoose')

const userSchema =new mongoose.Schema({
    name:{type:String},
    address:{
        street:{type:String},
        city:{type:String},
        pincode:{type:Number},
          },
    email:{type:String},
    phone:{type:Number}
},{timestamps:true}
)

module.exports=mongoose.model('Users',userSchema)