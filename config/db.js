const mysql = require('mysql')

//create connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'minecart'
    // host: 'instasolsofttech.com',
    // user: 'sxfegwpg_billsoft',
    // password: 'billsoft_12345',
    // database: 'sxfegwpg_billsoft'
});
conn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected succesfully');
})

module.exports = conn;