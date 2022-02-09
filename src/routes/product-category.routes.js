const express = require('express')
const router = express.Router()

const productCategController = require('../controllers/product-category.controller');

router.get('/',productCategController.AllProductCategory);


module.exports = router