const userModel =require('../Model/User')
const todoModel =require('../Model/todo')
const createUser =async function(req,res){
    try{
        let data= req.body
        let { name, email, phone,address} = data
    
                if(!name){
                    return res.status(400).send({status:false,message:"Please provide name"})
                }
                if(!email){
                    return res.status(400).send({status:false,message:"Please provide email"})
                }
                
              if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                  return res.status(400).send({ status: false, message: "Please provide valid Email Address" });
               }
                if(!address){
                    return res.status(400).send({status:false,message:"Please provide Address"})
                }
    
                if(!phone){
                    return res.status(400).send({status:false,message:"Please provide phone"})
                }
                let isValidPhone = (/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/.test(phone))
                if(!isValidPhone){
                    return res.status(400).send({status:false,message:"Please provide valid phone"})
                }

                const user = await userModel.create({name,email,address,phone})
                return res.status(200).send({message:"Todo data created successfully",data:user})
        }  
    catch(err){
        console.log(err)
return res.status(500).send({message:err})

    }
}

const getTodoListByUserId =async function(req,res){
    try{
        let array=[]
        let obj={}
let userId =req.params.id
let users=await userModel.findOne({_id:userId})
if (!users){
      res.status(400).send({ status: false, msg: "No user Found" })
}
let getTodoList = await todoModel.find({userId:userId})

if (!getTodoList){
      res.status(400).send({ status: false, msg: "No Todo list Found" })
}
let userInfo ={
    id:users._id,
    name:users.name,
    email:users.email,
    phone:users.phone,
}
for(let i=0;i<getTodoList.length;i++){
    obj={
      id:getTodoList[i]._id,
      userId:getTodoList[i].userId,
      title:getTodoList[i].title,
      completed:getTodoList[i].completed
    }
array.push(obj)
}
userInfo['Todos']=array
        return res.status(200).send(userInfo)
    }catch(err){
        console.log(err)
        return res.status(500).send({message:err})
    }
}


module.exports.createUser=createUser
module.exports.getTodoListByUserId=getTodoListByUserId
