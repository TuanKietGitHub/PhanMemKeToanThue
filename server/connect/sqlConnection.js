const sql = require('mssql');
const config = require('../config');

let db_con = sql.connect((config.sql) , err => {
        if (err) 
            console.log("Database Connection Failed !!!", err);
        console.log("connected to Database"); 
});

module.exports = db_con


























