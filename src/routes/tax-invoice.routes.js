const express = require('express')
const router = express.Router()

const invoiceController = require('../controllers/tax-invoice.controller');

router.get('/',invoiceController.AllInvoies);

// router.get('/images/:id',productController.AllProductsImages);

router.post('/',invoiceController.createInvoice);

module.exports = router