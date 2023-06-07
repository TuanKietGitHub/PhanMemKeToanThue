const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');


// Get All Nhóm vật tư
const getAllDmnhvt = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhvt');
        const list_Nhvt = await pool.request().query(sqlQueries.list_Dmnhvt);
        return list_Nhvt.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

// Check trùng mã 
const check_Manhvt_Dmnhvt = async (Ma_nh) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhvt');
        const check_Manhvt = await pool.request()
                                    .input(`${config.DB_MA_NH_VT}` , sql.NVarChar(40) , Ma_nh)
                                    .query(sqlQueries.check_Manhvt_Dmnhvt);
        return check_Manhvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Thêm vật tư
const create_Dmnhvt = async (NH_VT) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhvt');
        const add_Nhvt = await pool.request()
                                    .input(`${config.DB_MA_NH_VT}` , sql.NVarChar(40) , NH_VT.Ma_nh)
                                    .input(`${config.DB_TEN_NH_VT}` , sql.NVarChar(100) , NH_VT.Ten_nh)
                                    .input(`${config.DB_STT_NH_VT}` , sql.NVarChar(5) , NH_VT.Stt_nh)
                                    .query(sqlQueries.create_Dmnhvt);
        return add_Nhvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Xóa vật tư
const delete_Dmnhvt = async (id_Ma_nh) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhvt');
        const delete_Nhvt = await pool.request()
                                    .input(`${config.DB_MA_NH_VT}` , sql.NVarChar(40) , id_Ma_nh)
                                    .query(sqlQueries.delete_Dmnhvt);
        return delete_Nhvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Cập nhật vật tư
const update_Dmnhvt = async (NH_VT) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhvt');
        const update_Nhvt = await pool.request()
                                    .input(`${config.DB_MA_NH_VT}` , sql.NVarChar(40) , NH_VT.Ma_nh)
                                    .input(`${config.DB_TEN_NH_VT}` , sql.NVarChar(100) , NH_VT.Ten_nh)
                                    .input(`${config.DB_STT_NH_VT}` , sql.NVarChar(5) , NH_VT.Stt_nh)
                                    .query(sqlQueries.update_Dmnhvt);
        return update_Nhvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Tìm kiếm vật tư 
const find_Dmnhvt = async (keyFind) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmnhvt');
        const find_Nhvt = await pool.request()
                                    .input(`${config.DB_KEY_FIND}` , sql.NVarChar(100) , keyFind)
                                    .query(sqlQueries.find_Dmnhvt);

        // const sqlQueries = await utils.loadSqlQueries('Dmnhvt');
        // const find_VT = await pool.request()
        //     .query(`SELECT Ma_nh , Ten_nh , Stt_nh
        //             FROM Dmnhvt
        //             WHERE Ma_nh LIKE '%${keyFind}%' OR Ten_nh LIKE '%${keyFind}%' OR Stt_nh LIKE '%${keyFind}%' `)
        return find_Nhvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAllDmnhvt ,
    check_Manhvt_Dmnhvt ,
    create_Dmnhvt ,
    delete_Dmnhvt ,
    update_Dmnhvt ,
    find_Dmnhvt
}








