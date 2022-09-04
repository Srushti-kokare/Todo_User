const todoModel =require('../Model/todo')
const userModel =require('../Model/User')

const todoList =async function(req,res){
    try{
         let userId = req.body.userId;
        let  title = req.body.title;

                if(!userId){
                    return res.status(400).send({status:false,message:"Please provide UserId"})
                }
                if(!title){
                    return res.status(400).send({status:false,message:"Please provide title"})
                }

                const todo = await todoModel.create({userId,title})
                return res.status(200).send({message:"Todo data created successfully",data:todo})
        }  
    catch(err){
return res.status(500).send({message:err})
    }
}

const getTodoList =async function(req,res){
    try{
        let array=[]
        let todoList ={}
        let getTodoList = await todoModel.find()
        console.log(getTodoList)
        getTodoList.map(ele=>{
          todoList._id=ele._id,
          todoList.title=ele.title,
          todoList.completed=ele.completed
          array.push(todoList)
        })
        
        console.log(array)
        return res.status(200).send(array)
    }catch(err){
        return res.status(500).send({message:err})
    }
}


module.exports.todoList=todoList
module.exports.getTodoList=getTodoList
