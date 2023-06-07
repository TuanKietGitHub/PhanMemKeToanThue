const utils = require('../utils');
const sql = require('mssql');
const config = require('../../config');
// const pool = require('../../connect/sqlConnection')

// Get ALL DOI TUONG
const getALL_Dmdt = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdt');
        const list_DT = await pool.request()
                                    .query(sqlQueries.list_Dmdt);
        return list_DT.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Check MA DOI TUONG 
const check_Dmdt = async (Ma_dt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdt');
        const check_DT = await pool.request() 
                                        .input(`${config.DB_MA_DT}` , sql.NVarChar(50) , Ma_dt) 
                                        .query(sqlQueries.check_Ma_dt);
        return check_DT.recordset;0.
    } catch (error) {
        console.log(error.message)
    }
} 

// Create DOI TUONG
const create_Dmdt = async (DT) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdt');
        const create_DT = await pool.request()
                                        .input(`${config.DB_MA_DT}` , sql.NVarChar(50) , DT.Ma_dt)
                                        .input(`${config.DB_TEN_DT}` , sql.NVarChar(50) , DT.Ten_dt)
                                        .input(`${config.DB_MA_NH_DT}` , sql.NVarChar(50) , DT.Ma_nh_dt)
                                        .input(`${config.DB_MA_SO_THUE}` , sql.NVarChar(50) , DT.Ma_so_thue)
                                        .input(`${config.DB_DIA_CHI}` , sql.NVarChar(50) , DT.Dia_chi)
                                        .input(`${config.DB_TEL}` , sql.NVarChar(50) , DT.Tel)
                                        .input(`${config.DB_FAX}` , sql.NVarChar(50) , DT.Fax)
                                        .input(`${config.DB_EMAIL}` , sql.NVarChar(50) , DT.Email)
                                        .input(`${config.DB_WEB}` , sql.NVarChar(50) , DT.Web)
                                        .query(sqlQueries.create_Dmdt);
        return create_DT.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// DELETE DOI TUONG 
const delete_Dmdt = async (Ma_dt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdt');
        const delete_DT = await pool.request()
                                        .input(`${config.DB_MA_DT}` , sql.NVarChar(50) , Ma_dt)
                                        .query(sqlQueries.delete_Dmdt);
        return delete_DT.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// UPDATE DOI TUONG
const update_Dmdt = async (DT) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdt');
        const update_DT = await pool.request()
                                        .input(`${config.DB_MA_DT}` , sql.NVarChar(50) , DT.Ma_dt)
                                        .input(`${config.DB_TEN_DT}` , sql.NVarChar(50) , DT.Ten_dt)
                                        .input(`${config.DB_MA_NH_DT}` , sql.NVarChar(50) , DT.Ma_nh_dt)
                                        .input(`${config.DB_MA_SO_THUE}` , sql.NVarChar(50) , DT.Ma_so_thue)
                                        .input(`${config.DB_DIA_CHI}` , sql.NVarChar(50) , DT.Dia_chi)
                                        .input(`${config.DB_TEL}` , sql.NVarChar(50) , DT.Tel)
                                        .input(`${config.DB_FAX}` , sql.NVarChar(50) , DT.Fax)
                                        .input(`${config.DB_EMAIL}` , sql.NVarChar(50) , DT.Email)
                                        .input(`${config.DB_WEB}` , sql.NVarChar(50) , DT.Web)
                                        .query(sqlQueries.update_Dmdt);
        return update_DT.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// FIND DOI TUONG 
const find_Dmdt = async (keyFind) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmdt');
        const find_DT = await pool.request()
                                        .input(`${config.DB_KEY_FIND}` , sql.NVarChar(50) , keyFind)
                                        .query(sqlQueries.find_Dmdt);
        return find_DT.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    getALL_Dmdt , 
    check_Dmdt ,
    create_Dmdt ,
    delete_Dmdt ,
    update_Dmdt ,
    find_Dmdt
}