const utils = require('../utils');
const sql = require('mssql');
const config = require('../../config');

// Get ALL Don Vi Tinh
const getALLDmdvt = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdvt');
        const list_Dvt = await pool.request()
                                    .query(sqlQueries.list_Dmdvt);
        return list_Dvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Check Dvt 
const check_Dvt_Dmdvt = async (Dvt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdvt');
        const check_Dvt = await pool.request() 
                                        .input(`${config.DB_DON_VI_TINH}` , sql.NVarChar(50) , Dvt) 
                                        .query(sqlQueries.check_Dvt_Dmdvt);
        return check_Dvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
} 

// Create Don Vi Tinh 
const create_Dmdvt = async (DVT) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdvt');
        const create_Dvt = await pool.request()
                                        .input(`${config.DB_DON_VI_TINH}` , sql.NVarChar(50) , DVT.Dvt)
                                        .query(sqlQueries.create_Dmdvt);
        return create_Dvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Delete DonViTinh 
const delete_Dmdvt = async (Dvt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdvt');
        const delete_Dvt = await pool.request()
                                        .input(`${config.DB_DON_VI_TINH}` , sql.NVarChar(50) , Dvt)
                                        .query(sqlQueries.delete_Dmdvt);
        return delete_Dvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Update DonViTinh 
const update_Dmdvt = async (DVT) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdvt');
        const update_Dvt = await pool.request()
                                        .input(`${config.DB_DON_VI_TINH}` , sql.NVarChar(50) , DVT.Dvt)
                                        .input(`${config.DB_DVT_ENG}` , sql.NVarChar(50) , DVT.Dvt_eng)
                                        .query(sqlQueries.update_Dmdvt);
        return update_Dvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Find DonViTinh
const find_Dmdvt = async (find) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdvt');
        const find_Dvt = await pool.request()
                                        .input(`${config.DB_KEY_FIND}` , sql.NVarChar(50) , find)
                                        .query(sqlQueries.find_Dmdvt);
        return find_Dvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}



module.exports = {
    getALLDmdvt ,
    create_Dmdvt ,
    check_Dvt_Dmdvt ,
    delete_Dmdvt ,
    update_Dmdvt ,
    find_Dmdvt
}