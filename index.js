const express = require('express');
const bodyParser = require('body-parser')
//create express app

const app = express()

var cors = require('cors');
app.use(cors())
//setup the server port
const port = process.env.PORT || 5000;

//parse request data  content type applcation/json
app.use(bodyParser.json());
//parse request data content type applcation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//import ToDo routes
const todoRoutes = require('./src/routes/todo.routes');
//Create ToDo routes
app.use('/todo',todoRoutes)
//import users route    

//define root route
app.get('/', (req,res) => {
    res.send("hello World ")
})

//listen to the port
app.listen(port, () =>{
    console.log(`Express Server Is Runnig At Port ${port}`);
})