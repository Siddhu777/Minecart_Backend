const express = require('express')
const router = express.Router()

const todoController = require('../controllers/todo.controller');

//Get all to
router.get('/',todoController.AllToDoList);

//Get single ToDO
router.get('/:id',todoController.singleToDo);

//Delete single ToDo
router.delete('/:id',todoController.DeleteToDo)

//remove completed ToDO
router.put('/completed_todo',todoController.RemoveCompletedToDo);

//add new TODO
router.post('/',todoController.createToDo);

//cheked all pending todos
router.put('/check_all',todoController.RemoveCompletedToDo);

//Update to by id
router.put('/single_todo/:id',todoController.updateSingleTODO)


module.exports = router