const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

// GetALL NHOM DOI TUONG
const getAllDmnhdt = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhdt');
        const list_Nhdt = await pool.request()
                                        .query(sqlQueries.list_Dmnhdt);
        return list_Nhdt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// CHECK MA NHOM DOI TUONG
const check_Manhdt = async (Ma_nh_dt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhdt');
        const check_Manhdt = await pool.request()
                                        .input(`${config.DB_MA_NH_DT}` , sql.NVarChar(40) , Ma_nh_dt)
                                        .query(sqlQueries.check_Manhdt_Dmnhdt);
        return check_Manhdt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// CREATE NHOM DOI TUONG
const create_Dmnhdt = async (new_NH_DT) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhdt');
        const create_Dmnhdt = await pool.request()
                                        .input(`${config.DB_MA_NH_DT}` , sql.NVarChar(40) , new_NH_DT.Ma_nh_dt)
                                        .input(`${config.DB_TEN_NH_DT}` , sql.NVarChar(100) , new_NH_DT.Ten_nh_dt)
                                        .query(sqlQueries.create_Dmnhdt);
        return create_Dmnhdt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// DELETE NHOM DOI TUONG 
const delete_Dmnhdt = async (Ma_nh_dt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhdt');
        const delete_Dmnhdt = await pool.request()
                                        .input(`${config.DB_MA_NH_DT}` , sql.NVarChar(40) , Ma_nh_dt)
                                        .query(sqlQueries.delete_Dmnhdt);
        return delete_Dmnhdt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// UPDATE NHOM DOI TUONG 
const update_Dmnhdt = async (NH_DT) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhdt');
        const update_Dmnhdt = await pool.request()
                                        .input(`${config.DB_MA_NH_DT}` , sql.NVarChar(40) , NH_DT.Ma_nh_dt)
                                        .input(`${config.DB_TEN_NH_DT}` , sql.NVarChar(100) , NH_DT.Ten_nh_dt)
                                        .query(sqlQueries.update_Dmnhdt);
        return update_Dmnhdt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// FIND NHOM DOI TUONG 
const find_Dmnhdt = async (keyFind) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhdt');
        const find_Dmnhdt = await pool.request()
                                        .input(`${config.DB_KEY_FIND}` , sql.NVarChar(100) , keyFind)
                                        .query(sqlQueries.find_Dmnhdt);
        return find_Dmnhdt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAllDmnhdt ,
    create_Dmnhdt ,
    delete_Dmnhdt ,
    update_Dmnhdt ,
    find_Dmnhdt ,
    check_Manhdt
}