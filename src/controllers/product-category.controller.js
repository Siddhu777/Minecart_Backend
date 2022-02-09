const ProductCatModel = require('../models/product-category.model')

//Get Products
exports.AllProductCategory = async (req, res) => {
    try {
        const allProductCate = await ProductCatModel.getAllProductCat();
        return res.send(allProductCate)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching Product Categories" })
    }
}