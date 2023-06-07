const utils = require('../utils');
const sql = require('mssql');
const config = require('../../config');

// Get ALL TAI KHOAN
const getALLDmtk = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmtk');
        const listDmtk = await pool.request()
                                    .query(sqlQueries.list_Dmtk);
        return listDmtk.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Check MA TAI KHOAN 
const check_Tk_Dmtk = async (Ma_tk) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmtk');
        const check_Tk = await pool.request() 
                                        .input(`${config.DB_TK}` , sql.NVarChar(50) , Ma_tk) 
                                        .query(sqlQueries.check_Tk_Dmtk);
        return check_Tk.recordset;
    } catch (error) {
        console.log(error.message)
    }
} 

// Check MA TAI KHOAN ME
const check_Tk_me_Dmtk = async (Tk_me) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmtk');
        const check_Tk_me = await pool.request() 
                                        .input(`${config.DB_TK_ME}` , sql.NVarChar(50) , Tk_me) 
                                        .query(sqlQueries.check_Tk_me_Dmtk);
        return check_Tk_me.recordset;
    } catch (error) {
        console.log(error.message)
    }
} 

// Create TAI KHOAN 
const create_Dmtk = async (TK) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmtk');
        const create_Tk = await pool.request()
                                        .input(`${config.DB_TK}` , sql.NVarChar(50) , TK.Tk)
                                        .input(`${config.DB_TEN_TK}` , sql.NVarChar(100) , TK.Ten_tk)
                                        .input(`${config.DB_LOAI_TK}` , sql.Char(1) , TK.Loai_tk)
                                        .input(`${config.DB_BAC_TK}` , sql.Int(2) , TK.Bac_tk)
                                        .input(`${config.DB_TK_ME}` , sql.NVarChar(50) , TK.Tk_me)
                                        .input(`${config.DB_TK_NT}` , sql.Char(1) , TK.Tk_nt)
                                        .input(`${config.DB_TK_CN}` , sql.Char(1) , TK.Tk_dt)
                                        .query(sqlQueries.create_Dmtk);
        return create_Tk.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// DELETE TAI KHOAN 
const delete_Dmtk = async (Ma_tk) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmtk');
        const delete_Tk = await pool.request()
                                        .input(`${config.DB_TK}` , sql.NVarChar(50) , Ma_tk)
                                        .query(sqlQueries.delete_Dmtk);
        return delete_Tk.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// UPDATE TAI KHOAN
const update_Dmtk = async (TK) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmtk');
        const update_Tk = await pool.request()
                                        .input(`${config.DB_TK}` , sql.NVarChar(50) , TK.Tk)
                                        .input(`${config.DB_TEN_TK}` , sql.NVarChar(100) , TK.Ten_tk)
                                        .input(`${config.DB_LOAI_TK}` , sql.Char(1) , TK.Loai_tk)
                                        .input(`${config.DB_BAC_TK}` , sql.Int(2) , TK.Bac_tk)
                                        .input(`${config.DB_TK_ME}` , sql.NVarChar(50) , TK.Tk_me)
                                        .input(`${config.DB_TK_NT}` , sql.Char(1) , TK.Tk_nt)
                                        .input(`${config.DB_TK_CN}` , sql.Char(1) , TK.Tk_dt)
                                        .query(sqlQueries.update_Dmtk);
        return update_Tk.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// FIND TAI KHOAN  
const find_Dmtk = async (keyFind) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmtk');
        const find_Tk = await pool.request()
                                        .input(`${config.DB_KEY_FIND}` , sql.NVarChar(50) , keyFind)
                                        .query(sqlQueries.find_Dmtk);
        return find_Tk.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    getALLDmtk , 
    check_Tk_Dmtk ,
    check_Tk_me_Dmtk ,
    create_Dmtk ,
    delete_Dmtk ,
    update_Dmtk ,
    find_Dmtk
}