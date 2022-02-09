var conn = require('../../config/db');

var User = function(user){
    this.Name = user.Name;
    this.Email = user.Email;
    this.Mobile = user.Mobile;
    this.Address = user.Address;
    this.Password = user.Password;
    this.UserTypeId = user.UserTypeId;
  
    this.CreatedDate = new Date();
    // this.created_at = new Date();
    // this.updated_at = new Date();
    this.IsActive = user.IsActive ? user.IsActive : 1;
}

//get all User types
User.getAllUserTypes = () =>{
    return new Promise((resolve,reject) => {
        conn.query('select UserTypeId,UserTypeName FROM tblusertype WHERE IsActive=1', (err,res) => {
            if(err){
                return reject(err)
            }
            else{
                return resolve(res)
            }
        })
    })
}

//get all Users
User.getAllUsers = (id) =>{
    return new Promise((resolve,reject) => {
        conn.query('select Mobile,Name,Email,Address FROM tbluser WHERE IsActive=1 AND UserId=?',[id], (err,res) => {
            if(err){
                return reject(err)
            }
            else{
                return resolve(res)
            }
        })
    })
}


//create User
User.createUser = (userReqData) =>{
    return new Promise((resolve,reject)=>{
        conn.query('INSERT INTO tbluser SET ?', userReqData, (err,res) =>{
            if(err){
               return reject(err);
            }else{
               return resolve(res);
            }
        })
    })
}

//Login
User.userLogin = (Email,res) => {
    // return new Promise((resolve,reject) =>{
        conn.query('select Name,Mobile,Address,UserTypeId,Email from tbluser WHERE Email=? AND IsActive=1',[Email],
    (error,results,fields)=>{
        if(error){
            return res(error)
        }    
        return res(null,results[0])
        
    })
    // })
}

//Get permission
User.getUserPermissions= (id)=>{
    return new Promise((resolve,reject)=>{
        conn.query('select * from tblpermission WHERE UserTypeId=? AND IsActive=1',id,(err,res)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(res);
            }
        })
    })
}

module.exports = User;
