const ProductModel = require('../models/product.model')

//Get Products
exports.AllProducts = async (req, res) => {
    try {
        const allProducts = await ProductModel.getAllProducts();
        return res.send(allProducts)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching Products" })
    }
}

//Get ProductsImages
// exports.AllProductsImages = async (req, res) => {
//     try {
//         const allProductsImages = await ProductModel.getAllProductsImages(req.params.id);
//         return res.send(allProductsImages)
//     } catch (error) {
//         return res.json({ status: false, message: "Error while fetching Products" })
//     }
// }

//Create new Product
exports.createProduct = async (req, res) => {
    try {
        const prodReqData = req.body
        //check null
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            // if (!req.body) {
            return res.json({ success: false, message: 'Please fill all fields' });
        } else {

             await ProductModel.AddProduct(prodReqData)
            return res.json({ status: true, message: "Product Created Successfully" })
        }
    } catch (error) {
        return res.json({ status: false, message: "Error while creating product" })
    }
}