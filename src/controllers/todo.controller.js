const ToDoModel = require('../models/todo.model')

//Get TODOs
exports.AllToDoList = async (req, res) => {
    try {
        const allToDo = await ToDoModel.getAllToDo();
        return res.send(allToDo)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching ToDos" })
    }
}


//Get TODO by id
exports.singleToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.getSingleToDo(req.params.id);
        return res.send(toDo)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching ToDo" })
    }
}

//Create new ToDo
exports.createToDo = async (req, res) => {
    try {
        const ReqData =new ToDoModel(req.body);
        //check null
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            // if (!req.body) {
            return res.json({ success: false, message: 'Please fill all fields' });
        } else {
             await ToDoModel.AddToDo(ReqData)
            return res.json({ status: true, message: "ToDo Created Successfully" })
        }
    } catch (error) {
        return res.json({status: false, message: "Error while creating ToDo"})
    }
}

// //Delete TODOs
exports.DeleteToDo = async (req, res) => {
    try {
        const deletedToDo = await ToDoModel.deleteToDo(req.params.id);
        return res.send(deletedToDo)
        // return res.json({ status: true, message: "ToDo Removed successfully" })
    } catch (error) {
        return res.json({ status: false, message: "Error while Deleting ToDos" })
    }
}

//Delete CompletedToDo
exports.RemoveCompletedToDo = async (req, res) => {
    try {
        const allToDo = await ToDoModel.removeCompletedToDo();
        return res.send(allToDo)
        // return res.json({ status: true, message: "Completed ToDo Removed successfully" })
    } catch (error) {
        return res.json({ status: false, message: "Error while Deleting Completed ToDos" })
    }
}

//Check All toDo
exports.checkAllToDo = async (req, res) => {
    try {
        const allcheckedToDo = await ToDoModel.chceckAllToDo();
        return res.send(allcheckedToDo)
    } catch (error) {
        return res.json({ status: false, message: "Error while updating ToDos" })
    }
}

//Update ToDo by id
exports.updateSingleTODO= async (req, res) => {
    try {
        const reqData = req.body;
        const toDo = await ToDoModel.updateSingleToDo(reqData,req.params.id);
        return res.send(toDo)
    } catch (error) {
        return res.json({ status: false, message: "Error while updating ToDo" })
    }
}