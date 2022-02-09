var conn = require('../../config/db');

var ToDo = function(todo){
    this.TaskId = todo.TaskId;
    this.Description = todo.Description;
    this.IsComplete	= todo.IsComplete;
    // this.Email = todo.Email;
    this.CreatedDate = new Date();
    this.IsActive = todo.IsActive ? todo.IsActive : 1;
}

//get all ToDo List
ToDo.getAllToDo = () =>{
    return new Promise((resolve,reject) => {
        conn.query('select TaskId,Description,IsComplete,Email from tbltodo WHERE IsActive=1', (err,res) => {
            if(err){
                return reject(err)
            }
            else{
                return resolve(res)
            }
        })
    })
}

//get todo by id
ToDo.getSingleToDo = (id) =>{
    return new Promise((resolve,reject)=>{
        conn.query('select TaskId,Description,IsComplete,Email from tbltodo WHERE IsActive=1 AND TaskId=?', id, (err,res) =>{
            if(err){
               return reject(err);
            }else{
                console.log(res)
               return resolve(res);
            }
        })
    })
}


//create ToDo
ToDo.AddToDo = (ReqData) =>{
    return new Promise((resolve,reject)=>{
        conn.query('INSERT INTO tbltodo SET?', ReqData, (err,res) =>{
            if(err){
               return reject(err);
            }else{
               return resolve(res);
            }
        })
    })
}

//delete ToDo
ToDo.deleteToDo = (id) =>{
    return new Promise((resolve,reject)=>{
        conn.query('DELETE FROM tbltodo WHERE TaskId=?', id, (err,res) =>{
            if(err){
               return reject(err);
            }else{
                console.log(res)
               return resolve(res);
            }
        })
    })
}
//soft delete ToDo
ToDo.removeCompletedToDo = () =>{
    return new Promise((resolve,reject)=>{
        conn.query('UPDATE tbltodo SET IsActive=? WHERE IsComplete=1',0, (err,res) =>{
            if(err){
               return reject(err);
            }else{
               return resolve(res);
            }
        })
    })
}

//cheked all pending
ToDo.chceckAllToDo = () =>{
    return new Promise((resolve,reject)=>{
        conn.query('UPDATE tbltodo SET IsComplete=? WHERE IsComplete=0',1, (err,res) =>{
            if(err){
               return reject(err);
            }else{
               return resolve(res);
            }
        })
    })
}

//Update to by id
ToDo.updateSingleToDo = (reqData,id) =>{
    return new Promise((resolve,reject)=>{
        conn.query('UPDATE tbltodo SET IsComplete=?,Description=? WHERE TaskId=?', [reqData.IsComplete,reqData.Description,id], (err,res) =>{
            if(err){
               return reject(err);
            }else{
                console.log(res)
               return resolve(res);
            }
        })
    })
}

module.exports = ToDo