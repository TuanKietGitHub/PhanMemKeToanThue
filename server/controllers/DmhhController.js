const dmhhData = require('../data/Dmhh');

// Get ALL HANG HOA
const getAllDmhh = async (req , res , next) => {
    try {
        const listDmhh = await dmhhData.getALLDmhh();
            res.json({
                success: true,
                listDmhh
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


// CREATE HANG HOA
const addDmhh = async (req , res , next) => {
    try {
        // HANDLE DATA
        const { 
                Ma_vt ,
                Ten_vt ,
                Dvt ,
                Ma_nh ,
                Gia_mua ,
                Gia_ban ,
                Gia_ban4 ,
                Ts ,
                Loai_vt , 
                Sl_ton_min , 
                Sl_ton_max , 
                Tk_vt , 
                Tk_gv , 
                Tk_dt
            } = req.body

        if(!Ma_vt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã vật tư không được trống!'
                    })
        
        if(!Dvt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Đơn vị tính không được trống!'
                    })
        
        if(!Ma_nh) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã nhóm không được trống!'
                    })
        
        if(!Ten_vt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên vật tư không được trống!'
                    })

        if(!Tk_vt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tài khoản vật tư không được trống!'
                    })
        
        if(!Tk_gv) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tài khoản giá vốn không được trống!'
                    })

        if(!Tk_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tài khoản doanh thu không được trống!'
                    })


        const new_HH = { 
                Ma_vt ,
                Ten_vt ,
                Dvt ,
                Ma_nh ,
                Gia_mua ,
                Gia_ban ,
                Gia_ban4 ,
                Ts ,
                Loai_vt , 
                Sl_ton_min , 
                Sl_ton_max , 
                Tk_vt , 
                Tk_gv , 
                Tk_dt
            };

        // CHECK MA HANG HOA
        const check_Ma_vt = await dmhhData.check_Mavt(new_HH.Ma_vt);
        if(!(check_Ma_vt.length === 0))
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã vật tư ${new_HH.Ma_vt} đã tồn tại!`
                    })

        // CHECK DON VI TINH
        const check_Dvt = await dmhhData.check_Dvt(new_HH.Dvt);
        if(check_Dvt.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Đơn vị tính ${new_HH.Dvt} không tồn tại!`
                    })

        // CHECK MA NHOM HANG HOA
        const check_Manh = await dmhhData.check_Manh(new_HH.Ma_nh);
        if(check_Manh.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã nhóm ${new_HH.Ma_nh} không tồn tại!`
                    })

        const check_Tk_vt = await dmhhData.check_Tkvt(new_HH.Tk_vt);
        if(check_Tk_vt.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Tài khoản vật tư ${new_HH.Tk_vt} không tồn tại!`
                    })

        const check_Tk_gv = await dmhhData.check_Tkgv(new_HH.Tk_gv);
        if(check_Tk_gv.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Tài khoản giá vốn ${new_HH.Tk_gv} không tồn tại!`
                    })

        const check_Tk_dt = await dmhhData.check_Tkdt(new_HH.Tk_dt);
        if(check_Tk_dt.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Tài khoản doanh thu ${new_HH.Tk_dt} không tồn tại!`
                    })

        // ADD DATABASE 
        const data = await dmhhData.createDmhh(new_HH);
        const addDmhh = data.reduce((key , value) => Object.assign(key, value), {});

        if(Object.values(addDmhh).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Thêm vật tư không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Thêm vật tư thành công!' ,
                addDmhh
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


// DELETE HANG HOA
const deleteDmhh = async (req , res , next) => {
    try {
        const Ma_vt = req.params.Ma_vt.trim();

        // CHECK NULL
        if(!Ma_vt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã vật tư không được trống!'
                    })

        // CHECK MA
        const check_Hh = await dmhhData.check_Mavt(Ma_vt);
        if(check_Hh.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã vật tư ${Ma_vt} không tồn tại!`
                    })
    
        // DELETE DATABASE 
        const data = await dmhhData.deleteDmhh(Ma_vt);
        const deleteDmhh = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(deleteDmhh).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Xóa hàng hóa không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Xóa hàng hóa thành công!' ,
                deleteDmhh
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


// UPDATE HANG HOA
const updateDmhh = async (req , res , next) => {
    try {
        // HANDLE DATA
        const { 
                Ma_vt ,
                Ten_vt ,
                Dvt ,
                Ma_nh ,
                Gia_mua ,
                Gia_ban ,
                Gia_ban4 ,
                Ts ,
                Loai_vt , 
                Sl_ton_min , 
                Sl_ton_max , 
                Tk_vt , 
                Tk_gv , 
                Tk_dt
            } = req.body

        if(!Ma_vt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã vật tư không được trống!'
                    })
        
        if(!Ma_nh) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã nhóm không được trống!'
                    })
        
        if(!Ten_vt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên vật tư không được trống!'
                    })

        if(!Tk_vt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tài khoản vật tư không được trống!'
                    })
        
        if(!Tk_gv) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tài khoản giá vốn không được trống!'
                    })

        if(!Tk_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tài khoản doanh thu không được trống!'
                    })

        const dataUpdate_HH = { 
                Ma_vt ,
                Ten_vt ,
                Dvt ,
                Ma_nh ,
                Gia_mua ,
                Gia_ban ,
                Gia_ban4 ,
                Ts ,
                Loai_vt , 
                Sl_ton_min , 
                Sl_ton_max , 
                Tk_vt , 
                Tk_gv , 
                Tk_dt
            };

        // CHECK MA HANG HOA
        const check_HH = await dmhhData.check_Mavt(dataUpdate_HH.Ma_vt);
        if(check_HH.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã vật tư ${dataUpdate_HH.Ma_vt} không tồn tại!`
                    })

        // CHECK MA NHOM HANG HOA
        const check_MA_NH_HH = await dmhhData.check_Manh(dataUpdate_HH.Ma_nh);
        if(check_MA_NH_HH.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã nhóm ${dataUpdate_HH.Ma_nh} không tồn tại!`
                    })

        // CHECK DON VI TINH
        const check_Dvt_HH = await dmhhData.check_Dvt(dataUpdate_HH.Dvt);
        if(check_Dvt_HH.length === 0) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Đợn vị tính ${dataUpdate_HH.Dvt} không tồn tại!`
                    })

        // CHECK TK VT
        const check_TK_VT_HH = await dmhhData.check_Tkvt(dataUpdate_HH.Tk_vt);
        if(check_TK_VT_HH.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Tài khoản vật tư ${dataUpdate_HH.Tk_vt} không tồn tại!`
                    })

        // CHECK TK GV
        const check_TK_GV_HH = await dmhhData.check_Tkgv(dataUpdate_HH.Tk_gv);
        if(check_TK_GV_HH.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Tài khoản giá vốn ${dataUpdate_HH.Tk_gv} không tồn tại!`
                    })

        // CHECK TK DT
        const check_TK_DT_HH = await dmhhData.check_Tkdt(dataUpdate_HH.Tk_dt);
        if(check_TK_DT_HH.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Tài khoản doanh thu ${dataUpdate_HH.Tk_dt} không tồn tại!`
                    })

        // UPDATE DATABASE 
        const data = await dmhhData.updateDmhh(dataUpdate_HH);
        const updateDmhh = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(updateDmhh).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Cập nhật vật tư không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Cập nhật vật tư thành công!' ,
                updateDmhh
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

// FIND HANG HOA
const findDmhh = async (req , res , next) => {
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
        const findDmhh = await dmhhData.findDmhh(keyFind);

        res.json({
            success: true ,
            findDmhh
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
    getAllDmhh ,
    addDmhh ,
    deleteDmhh ,
    updateDmhh ,
    findDmhh
}