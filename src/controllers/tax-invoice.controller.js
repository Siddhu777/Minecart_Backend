const InvoiceModel = require('../models/tax-invoice.model')

//Get Invoice
exports.AllInvoies = async (req, res) => {
    console.log(req.query)
    try {
        const allInvoiecs = await InvoiceModel.getAllInvoices();
        return res.send(allInvoiecs)
    } catch (error) {
        return res.json({ status: false, message: "Error while fetching Invoices" })
    }
}

//Create new Invoice
exports.createInvoice = async (req, res) => {
    try {
        const ReqData = req.body
        //check null
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            // if (!req.body) {
            return res.json({ success: false, message: 'Please fill all fields' });
        } else {

             await InvoiceModel.AddInvoice(ReqData)
            return res.json({ status: true, message: "Invoice Created Successfully" })
        }
    } catch (error) {
        return res.json({ status: false, message: "Error while creating Invoice" })
    }
}