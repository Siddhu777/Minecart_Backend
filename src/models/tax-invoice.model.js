var conn = require('../../config/db');

var Invoice = function(invoice){
    this.CustomerName = invoice.CustomerName
    this.ProductName = invoice.ProductName	;
    this.Title = invoice.Title;
    this.Mobile = invoice.Mobile;
    this.Price	= invoice.Price;
    this.ProductCategory = invoice.ProductCategory;
    this.Address = invoice.Address;
    this.CreatedDate = new Date();
    // this.created_at = new Date();
    // this.updated_at = new Date();
    this.IsActive = invoice.IsActive ? invoice.IsActive : 1;
}

//get all Ivoices
Invoice.getAllInvoices= () =>{
    return new Promise((resolve,reject) => {
        conn.query('select * from tbltaxinvoice', (err,res) => {
            if(err){
                return reject(err)
            }
            else{
                return resolve(res)
            }
        })
    })
}

//create Invoice
Invoice.AddInvoice = (ReqData) =>{
    return new Promise((resolve,reject)=>{
        conn.query('INSERT INTO tbltaxinvoice SET ?', ReqData, (err,res) =>{
            if(err){
               return reject(err);
            }else{
               return resolve(res);
            }
        })
    })
}

module.exports = Invoice;
