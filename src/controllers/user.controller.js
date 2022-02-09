const UserModel = require('../models/user.model')
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

//Get User Types
exports.AllUserTypes = async (req, res) => {
    try {
        const allUserTypes = await UserModel.getAllUserTypes();
        return res.send(allUserTypes)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching User Types" })
    }
}

//Get Users
exports.AllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.getAllUsers(req.params.userid);
        return res.send(allUsers)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching Users" })
    }
}

//Create new Useer
exports.createUser = async (req, res) => {
    try {
        const userReqData = new UserModel(req.body);
        //encrypt password before saving database
        const salt = genSaltSync(10);
        //this will do the hash encryption and stroing in body password
        userReqData.Password = hashSync(userReqData.Password, salt);
        //check null
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            // if (!req.body) {
            return res.json({ success: false, message: 'Please fill all fields' });
        } else {

             await UserModel.createUser(userReqData)
            return res.json({ status: true, message: "User Created Successfully" })
        }
    } catch (error) {
        return res.json({ status: false, message: "Error while creating user" })
    }
}

//Login
exports.userLogin = (req, res) => {
    // try{
    const body = req.body;
    UserModel.userLogin(body.Email, (err, results) => {
        // const companyName = results.Name;
        if (err) {
            console.log(err);
        }
        if (!results || results.lentgh === 0) {
            return res.json({
                success: 0,
                data: "Invalid Usename"
            });
        }

        const result = compareSync(body.Password, results.Password);
        if (result) {
            // const payload ={
            //     username:results.Email
            // }
            // const options ={
            //     subject: `${results.UserId}`,
            //     expiresIn: 900
            // }
            // const jsontoken = sign(payload,"qwe1234",options);
            // return res.json({jsontoken})

            results.Password = undefined;
            const jsontoken = sign({ result: results }, "qwe1234", {
                expiresIn: "1h"
            });
            return res.json({
                success: 1,
                message: "Login succesfull",
                user: results,
                token: jsontoken
            });
        } else {
            return res.json({
                success: 0,
                data: "Incorrect password"
            })
        }
    })

    // return res.send(singleCompany)
    //     } catch (error){
    //         err
    //     }
}

//Get User Permissions
exports.getUserPermission = async (req,res)=>{
   try{
    const permission = await UserModel.getUserPermissions(req.params.userid);
    return res.send(permission)
   }catch(error){
    return res.json({ status: false, message: "Error while fetching user permissions" })
   }
    
}