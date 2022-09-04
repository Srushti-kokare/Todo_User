const express =require('express')
const router =express.Router()

const todoController =require('../Controller/todoController')
const userController =require('../Controller/UserController')

 router.post('/createTodo',todoController.todoList)
 router.post('/createUsers',userController.createUser)
 router.get('/todos',todoController.getTodoList)
router.get('/user/:id',userController.getTodoListByUserId)

module.exports = router;