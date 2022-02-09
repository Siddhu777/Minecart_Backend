var conn = require('../../config/db');

var Product = function(product){
    this.ProductName = user.ProductName	;
    this.Title = product.Title;
    this.Description = product.Description;
    this.Price	= product.Price;
    this.ProductCode = product.ProductCode;
    this.ProductCategoryId = product.ProductCategoryId;
    // this.Image = product.Image
  
    this.CreatedDate = new Date();
    // this.created_at = new Date();
    // this.updated_at = new Date();
    this.IsActive = product.IsActive ? product.IsActive : 1;
}

//get all products
Product.getAllProducts = () =>{
    return new Promise((resolve,reject) => {
        conn.query('select p.ProductName,p.Title,p.Description,p.Price,p.ProductCode,pc.ProductCategory FROM tblproduct p JOIN tblproductcategories pc on p.ProductCategoriesId = pc.ProductCategoriesId', (err,res) => {
            if(err){
                return reject(err)
            }
            else{
                return resolve(res)
            }
        })
    })
}

//get all products images
// Product.getAllProductsImages = (id) =>{
//     return new Promise((resolve,reject) => {
//         conn.query('select Image FROM tblproduct WHERE IsActive=1 AND ProductId=?',id, (err,res) => {
//             if(err){
//                 return reject(err)
//             }
//             else{
//                 return resolve(res)
//             }
//         })
//     })
// }

//create Product
Product.AddProduct = (prodReqData) =>{
    return new Promise((resolve,reject)=>{
        conn.query('INSERT INTO tblproduct SET ?', prodReqData, (err,res) =>{
            if(err){
               return reject(err);
            }else{
               return resolve(res);
            }
        })
    })
}

module.exports = Product;
