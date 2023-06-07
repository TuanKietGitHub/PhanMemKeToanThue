const dmtkData = require('../data/Dmtk');
const handlingString = require('./handlingString');

// Get ALL TAI KHOAN
const getAllDmtk = async (req , res , next) => {
    try {
        const listDmtk = await dmtkData.getALLDmtk();
            res.json({
                success: true,
                listDmtk
            })
    } catch (error) {
        res
            .status(400) 
            .json({
                success: false ,
                message: error.message
            });
    }
}


// CREATE TAI KHOAN
const addDmtk = async (req , res , next) => {
    try {
        // HANDLE DATA
        const { 
                Tk , 
                Ten_tk , 
                Loai_tk , 
                Bac_tk , 
                Tk_me , 
                Tk_nt , 
                Tk_dt 
            } = req.body
        
        if(!Tk) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã tài khoản không được trống!'
                    })
        
        if(!Ten_tk) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên tài khoản không được trống!'
                    })

        if (Loai_tk !== 'T' && Loai_tk !== 'C')
            return res
                        .status(400)
                        .json({
                            success: false ,
                            message: 'Loại tài khoản không phù hợp!'
                        })

        if (Tk_nt !== 'C' && Tk_nt !== 'K')
            return res
                        .status(400)
                        .json({
                            success: false ,
                            message: 'Theo dõi ngoại tệ không phù hợp!'
                        })

        if (Tk_dt !== 'C' && Tk_dt !== 'K')
            return res
                        .status(400)
                        .json({
                            success: false ,
                            message: 'Theo dõi công nợ không phù hợp!'
                        })

        const new_TK = { 
                Tk , 
                Ten_tk , 
                Loai_tk , 
                Bac_tk , 
                Tk_me , 
                Tk_nt , 
                Tk_dt 
            };

        // CHECK MA TAI KHOAN
        const check_TK = await dmtkData.check_Tk_Dmtk(new_TK.Tk);
        if(!(check_TK.length === 0))
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã tài khoản ${new_TK.Tk} đã tồn tại!`
                    })
        
        // CHECK TAI KHOAN ME
        if(new_TK.Tk_me !== '') {
            const check_TK_ME = await dmtkData.check_Tk_me_Dmtk(new_TK.Tk_me);
            if(check_TK_ME.length === 0)
            return res 
                        .status(400)
                        .json({
                            success: false ,
                            message: `Tài khoản mẹ ${new_TK.Tk_me} không đúng!`
                        })
        }

        // ADD DATABASE 
        const data = await dmtkData.create_Dmtk(new_TK);
        const addDmtk = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(addDmtk).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Thêm tài khoản không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Thêm tài khoản thành công!' ,
                addDmtk
            })
    } catch (error) {
        res
            .status(400) 
            .json({
                success: false ,
                message: error.message
            });
    }
}


// DELETE TAI KHOAN
const deleteDmtk = async (req , res , next) => {
    try {
        const Tk = req.params.Tk;

        // CHECK NULL
        if(!Tk) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã tài khoản không được trống!'
                    })

        // CHECK MA
        const check_TK = await dmtkData.check_Tk_Dmtk(Tk);
        if(check_TK.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã tài khoản ${Tk} không tồn tại!`
                    })
    
        // DELETE DATABASE 
        const data = await dmtkData.delete_Dmtk(Tk);
        const deleteDmtk = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(deleteDmtk).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Xóa tài khoản không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Xóa tài khoản thành công!' ,
                deleteDmtk
            })
    } catch (error) {
        res
            .status(400) 
            .json({
                success: false ,
                message: error.message
            });
    }
}


// UPDATE TAI KHOAN
const updateDmtk = async (req , res , next) => {
    try {
        // HANDLE DATA
        const { 
                Tk , 
                Ten_tk , 
                Loai_tk , 
                Bac_tk , 
                Tk_me , 
                Tk_nt , 
                Tk_dt 
            } = req.body
        
        if(!Tk) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã tài khoản không được trống!'
                    })
        
        if(!Ten_tk) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên tài khoản không được trống!'
                    })

        if (Loai_tk === 'T' && Loai_tk === 'C')
            return res
                        .status(400)
                        .json({
                            success: false ,
                            message: 'Theo dõi ngoại tệ không phù hợp!'
                        })

        if (Tk_nt === 'C' && Tk_nt === 'K')
            return res
                        .status(400)
                        .json({
                            success: false ,
                            message: 'Theo dõi công nợ không phù hợp!'
                        })

        if (Tk_dt === 'C' && Tk_dt === 'K')
            return res
                        .status(400)
                        .json({
                            success: false ,
                            message: 'Theo dõi công nợ không phù hợp!'
                        })

        const dataUpdate_TK = { 
                Tk , 
                Ten_tk , 
                Loai_tk , 
                Bac_tk , 
                Tk_me , 
                Tk_nt , 
                Tk_dt 
            };

        // CHECK MA TAI KHOAN
        const check_TK = await dmtkData.check_Tk_Dmtk(dataUpdate_TK.Tk);
        if(check_TK.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã tài khoản ${dataUpdate_TK.Tk} không tồn tại!`
                    })
        
        // CHECK TAI KHOAN ME
        if(dataUpdate_TK.Tk_me !== '') {
            const check_TK_ME = await dmtkData.check_Tk_me_Dmtk(dataUpdate_TK.Tk_me);
            if(check_TK_ME.length === 0)
            return res 
                        .status(400)
                        .json({
                            success: false ,
                            message: `Tài khoản mẹ ${dataUpdate_TK.Tk_me} không đúng!`
                        })
        }

        // UPDATE DATABASE 
        const data = await dmtkData.update_Dmtk(dataUpdate_TK);
        const updateDmtk = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(updateDmtk).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Cập nhật tài khoản không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Cập nhật tài khoản thành công!' ,
                updateDmtk
            })
    } catch (error) {
        res
            .status(400) 
            .json({
                success: false ,
                message: error.message
            });
    }
}

// FIND TAI KHOAN
const findDmtk = async (req , res , next) => {
    try {
        const keyFind = req.params.find.trim();

        // CHECK NULL
        if(!keyFind) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Không có từ khóa tìm kiếm!'
                    })
    
        // FIND DATABASE 
        const findDmtk = await dmtkData.find_Dmtk(keyFind);
            res.json({
                success: true ,
                findDmtk
            })
    } catch (error) {
        res
            .status(400) 
            .json({
                success: false ,
                message: error.message
            });
    }
}

module.exports = {
    getAllDmtk ,
    addDmtk ,
    deleteDmtk ,
    updateDmtk ,
    findDmtk
}