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

//import Invoices routes
const InvoicesRoutes = require('./src/routes/tax-invoice.routes');
//Create Invoices routes
app.use('/Invoices',InvoicesRoutes)

//import products category routes
const productcategoryRoutes = require('./src/routes/product-category.routes');
//Create product category routes
app.use('/productcategory',productcategoryRoutes)

//import products routes
const productRoutes = require('./src/routes/product.route');
//Create product routes
app.use('/products',productRoutes)

//import users route    
const userRoutes = require('./src/routes/user.routes')
//create users route
app.use('/user', userRoutes)

//define root route
app.get('/', (req,res) => {
    res.send("hello World ")
})

//listen to the port
app.listen(port, () =>{
    console.log(`Express Server Is Runnig At Port ${port}`);
})