const mongoose =require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const todoSchema =new mongoose.Schema({
    userId:{type:ObjectId,required:true},
    title:{type:String},
    completed:{type:Boolean,default:false}
},{timestamps:true}
)

module.exports=mongoose.model('Todos',todoSchema)