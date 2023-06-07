const utils = require('../utils');
const sql = require('mssql');
const config = require('../../config');

// Get ALL HANG HOA
const getALLDmhh = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const list_HH = await pool.request()
                                    .query(sqlQueries.list_Dmhh);
        return list_HH.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Check MA HANG HOA 
const check_Mavt = async (Ma_vt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const check_Mavt = await pool.request() 
                                        .input(`${config.DB_MA_VT}` , sql.NVarChar(50) , Ma_vt) 
                                        .query(sqlQueries.check_Mavt_Dmhh);
        return check_Mavt.recordset;
    } catch (error) {
        console.log(error.message)
    }
} 

// Check DON VI TINH 
const check_Dvt = async (Dvt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const check_Dvt = await pool.request() 
                                        .input(`${config.DB_DON_VI_TINH}` , sql.NVarChar(50) , Dvt) 
                                        .query(sqlQueries.check_Dvt_Dmhh);
        return check_Dvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Check MA NHOM 
const check_Manh = async (Ma_nh) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const check_Manh = await pool.request() 
                                        .input(`${config.DB_MA_NH_VT}` , sql.NVarChar(50) , Ma_nh) 
                                        .query(sqlQueries.check_Manh_Dmhh);
        return check_Manh.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Check TK VAT TU
const check_Tkvt = async (Tk_vt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const check_Tkvt = await pool.request()
                                        .input(`${config.DB_TK_VT}` , sql.NVarChar(50) , Tk_vt) 
                                        .query(sqlQueries.check_Tkvt_Dmhh);
        return check_Tkvt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Check TK GIA VON
const check_Tkgv = async (Tk_gv) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const check_Tkgv = await pool.request()
                                        .input(`${config.DB_TK_GV}` , sql.NVarChar(50) , Tk_gv) 
                                        .query(sqlQueries.check_Tkgv_Dmhh);
        return check_Tkgv.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Check TK DOANH THU
const check_Tkdt = async (Tk_dt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const check_Tkdt = await pool.request()
                                        .input(`${config.DB_TK_DT}` , sql.NVarChar(50) , Tk_dt) 
                                        .query(sqlQueries.check_Tkdt_Dmhh);
        return check_Tkdt.recordset;
    } catch (error) {
        console.log(error.message)
    }
}

// Create HANG HOA
const createDmhh = async (Hh) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const create_Hh = await pool.request()
                                        .input(`${config.DB_MA_VT}` , sql.NVarChar(50) , Hh.Ma_vt)
                                        .input(`${config.DB_TEN_VT}` , sql.NVarChar(100) , Hh.Ten_vt)
                                        .input(`${config.DB_DON_VI_TINH}` , sql.NVarChar(40) , Hh.Dvt)
                                        .input(`${config.DB_MA_NH_VT}` , sql.NVarChar(50) , Hh.Ma_nh)
                                        .input(`${config.DB_GIA_MUA}` , sql.Numeric() , Hh.Gia_mua)
                                        .input(`${config.DB_GIA_BAN_MIN}` , sql.Numeric() , Hh.Gia_ban)
                                        .input(`${config.DB_GIA_BAN_MAX}` , sql.Numeric() , Hh.Gia_ban4)
                                        .input(`${config.DB_TS}` , sql.Numeric() , Hh.Ts)
                                        .input(`${config.DB_LOAI_VT}` , sql.Char() , Hh.Loai_vt)
                                        .input(`${config.DB_SL_TON_MIN}` , sql.Numeric() , Hh.Sl_ton_min)
                                        .input(`${config.DB_SL_TON_MAX}` , sql.Numeric() , Hh.Sl_ton_max)
                                        .input(`${config.DB_TK_VT}` , sql.NVarChar(50) , Hh.Tk_vt)
                                        .input(`${config.DB_TK_GV}` , sql.NVarChar(50) , Hh.Tk_gv)
                                        .input(`${config.DB_TK_DT}` , sql.NVarChar(50) , Hh.Tk_dt)
                                        .query(sqlQueries.create_Dmhh);
        return create_Hh.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// DELETE HANG HOA 
const deleteDmhh = async (Ma_vt) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const delete_Hh = await pool.request()
                                        .input(`${config.DB_MA_VT}` , sql.NVarChar(50) , Ma_vt)
                                        .query(sqlQueries.delete_Dmhh);
        return delete_Hh.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// UPDATE HANG HOA
const updateDmhh = async (HH) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const update_HH = await pool.request()
                                        .input(`${config.DB_MA_VT}` , sql.NVarChar(50) , HH.Ma_vt)
                                        .input(`${config.DB_TEN_VT}` , sql.NVarChar(100) , HH.Ten_vt)
                                        .input(`${config.DB_DON_VI_TINH}` , sql.NVarChar(40) , HH.Dvt)
                                        .input(`${config.DB_MA_NH_VT}` , sql.NVarChar(50) , HH.Ma_nh)
                                        .input(`${config.DB_GIA_MUA}` , sql.Numeric() , HH.Gia_mua)
                                        .input(`${config.DB_GIA_BAN_MIN}` , sql.Numeric() , HH.Gia_ban)
                                        .input(`${config.DB_GIA_BAN_MAX}` , sql.Numeric() , HH.Gia_ban4)
                                        .input(`${config.DB_TS}` , sql.Numeric() , HH.Ts)
                                        .input(`${config.DB_LOAI_VT}` , sql.Char() , HH.Loai_vt)
                                        .input(`${config.DB_SL_TON_MIN}` , sql.Numeric() , HH.Sl_ton_min)
                                        .input(`${config.DB_SL_TON_MAX}` , sql.Numeric() , HH.Sl_ton_max)
                                        .input(`${config.DB_TK_VT}` , sql.NVarChar(50) , HH.Tk_vt)
                                        .input(`${config.DB_TK_GV}` , sql.NVarChar(50) , HH.Tk_gv)
                                        .input(`${config.DB_TK_DT}` , sql.NVarChar(50) , HH.Tk_dt)
                                        .query(sqlQueries.update_Dmhh);
        return update_HH.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


// FIND HANG HOA 
const findDmhh = async (keyFind) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Dmhh');
        const find_HH = await pool.request()
                                        .input(`${config.DB_KEY_FIND}` , sql.NVarChar(50) , keyFind)
                                        .query(sqlQueries.find_Dmhh);
        return find_HH.recordset;
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = {
    getALLDmhh ,
    check_Mavt ,
    check_Dvt ,
    check_Manh ,
    check_Tkvt ,
    check_Tkgv ,
    check_Tkdt ,
    createDmhh ,
    deleteDmhh ,
    updateDmhh ,
    findDmhh
}