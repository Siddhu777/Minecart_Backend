var conn = require('../../config/db');

var ProductCategory = function(productCAt){
    this.ProductCategoriesId = productCAt.ProductCategoriesId
    this.ProductCategory = productCAt.ProductCategory	;
    
  
    this.CreatedDate = new Date();
    // this.created_at = new Date();
    // this.updated_at = new Date();
    this.IsActive = productCAt.IsActive ? productCAt.IsActive : 1;
}

//get all ProductCategory
ProductCategory.getAllProductCat = () =>{
    return new Promise((resolve,reject) => {
        conn.query('select ProductCategoriesId,ProductCategory FROM tblproductcategories WHERE IsActive=1', (err,res) => {
            if(err){
                return reject(err);
            }
            else{
                return resolve(res);
            }
        })
    })
}



module.exports = ProductCategory