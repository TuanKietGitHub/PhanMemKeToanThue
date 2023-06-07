const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
        PORT , 
        HOST ,
        SQL_USER , 
        SQL_PASSWORD , 
        SQL_DATABASE , 
        SQL_SERVER ,

        DB_MA_VT ,
        DB_TEN_VT ,
        DB_GIA_MUA ,
        DB_GIA_BAN_MIN ,
        DB_GIA_BAN_MAX ,
        DB_TS ,
        DB_LOAI_VT ,
        DB_SL_TON_MIN , 
        DB_SL_TON_MAX ,  
        DB_TK_VT ,
        DB_TK_GV , 
        DB_TK_DT ,

        DB_MA_NH_VT ,
        DB_TEN_NH_VT ,
        DB_STT_NH_VT ,

        DB_DON_VI_TINH ,
        DB_DVT_ENG ,

        DB_MA_NH_DT ,
        DB_TEN_NH_DT ,

        DB_MA_DT ,
        DB_TEN_DT ,
        DB_DIA_CHI ,
        DB_MA_SO_THUE ,
        DB_TEL ,
        DB_FAX ,
        DB_EMAIL ,
        DB_WEB ,

        DB_TK ,
        DB_TEN_TK ,
        DB_LOAI_TK ,
        DB_BAC_TK ,
        DB_TK_ME ,
        DB_TK_NT ,
        DB_TK_CN ,

        DB_KEY_FIND

    } = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT , 'PORT is required');
assert(HOST , 'HOST is required');

module.exports = {
    port: PORT ,
    host: HOST ,
    sql: {
        server: SQL_SERVER ,
        database: SQL_DATABASE ,
        user: SQL_USER ,
        password: SQL_PASSWORD ,
        options: {
            encrypt: sqlEncrypt ,
            enableArithAbort: true
        },
    },

    DB_MA_VT ,
    DB_TEN_VT ,
    DB_GIA_MUA ,
    DB_GIA_BAN_MIN ,
    DB_GIA_BAN_MAX ,
    DB_TS ,
    DB_LOAI_VT ,
    DB_SL_TON_MIN , 
    DB_SL_TON_MAX ,  
    DB_TK_VT ,
    DB_TK_GV , 
    DB_TK_DT ,
    

    DB_MA_NH_VT ,
    DB_TEN_NH_VT ,
    DB_STT_NH_VT ,

    DB_DON_VI_TINH ,
    DB_DVT_ENG ,

    DB_MA_NH_DT ,
    DB_TEN_NH_DT ,

    DB_MA_DT ,
    DB_TEN_DT ,
    DB_DIA_CHI ,
    DB_MA_SO_THUE ,
    DB_TEL ,
    DB_FAX ,
    DB_EMAIL ,
    DB_WEB ,

    DB_TK ,
    DB_TEN_TK ,
    DB_LOAI_TK ,
    DB_BAC_TK ,
    DB_TK_ME ,
    DB_TK_NT ,
    DB_TK_CN ,

    DB_KEY_FIND
};



