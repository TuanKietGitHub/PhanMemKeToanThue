const dmdtData = require('../data/Dmdt');

// Get ALL DOI TUONG
const getAll_Dmdt = async (req , res , next) => {
    try {
        const list_Dmdt = await dmdtData.getALL_Dmdt();

            res.json({
                success: true,
                list_Dmdt
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


// CREATE NHOM DOI TUONG
const add_Dmdt = async (req , res , next) => {
    try {
        // HANDLE DATA
        const { 
                Ma_dt , 
                Ten_dt , 
                Ma_nh_dt , 
                Ma_so_thue , 
                Dia_chi , 
                Tel , 
                Fax , 
                Email , 
                Web
            } = req.body;

        const new_DT = { 
                            Ma_dt , 
                            Ten_dt , 
                            Ma_nh_dt , 
                            Ma_so_thue , 
                            Dia_chi , 
                            Tel , 
                            Fax , 
                            Email , 
                            Web
                        };

        // CHECK NULL
        if(!new_DT.Ma_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã đối tượng không được trống!'
                    })
        
        if(!new_DT.Ten_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên đối tượng không được trống!'
                    })
        
        if(!new_DT.Ma_nh_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã nhóm đối tượng không được trống!'
                    })
            
        if(!new_DT.Ma_so_thue) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã số thuế không được trống!'
                    })

        // // CHECK MA
        const check_DT = await dmdtData.check_Dmdt(new_DT.Ma_dt);
        if(!(check_DT.length === 0))
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã đối tượng ${new_DT.Ma_dt} đã tồn tại!`
                    })
    
        // // ADD DATABASE 
        const data = await dmdtData.create_Dmdt(new_DT);
        const add_DT = data.reduce((a , b) => Object.assign(a, b), {});
   
        if(Object.values(add_DT).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Thêm đối tượng không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Thêm đối tượng thành công!' ,
                add_DT
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


// DELETE DOI TUONG
const delete_Dmdt = async (req , res , next) => {
    try {
        const Ma_DT = req.params.Ma_dt.trim();

        // CHECK NULL
        if(!Ma_DT) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã đối tượng không được trống!'
                    })

        // // CHECK MA
        const check_DT = await dmdtData.check_Dmdt(Ma_DT);
        if(check_DT.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã đối tượng ${Ma_DT} không tồn tại!`
                    })
    
        // DELETE DATABASE 
        const data = await dmdtData.delete_Dmdt(Ma_DT);
        const delete_DT = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(delete_DT).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Xóa đối tượng không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Xóa đối tượng thành công!' ,
                delete_DT
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


// UPDATE NHOM DOI TUONG
const update_Dmdt = async (req , res , next) => {
    try {
        // HANDLE DATA
        const { 
                Ma_dt , 
                Ten_dt , 
                Ma_nh_dt , 
                Ma_so_thue , 
                Dia_chi , 
                Tel , 
                Fax , 
                Email , 
                Web
            } = req.body;

        const dataUpdate_DT = { 
                                Ma_dt , 
                                Ten_dt , 
                                Ma_nh_dt , 
                                Ma_so_thue , 
                                Dia_chi , 
                                Tel , 
                                Fax , 
                                Email , 
                                Web
                            };

        // CHECK NULL
        if(!dataUpdate_DT.Ma_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã đối tượng không được trống!'
                    })
        
        if(!dataUpdate_DT.Ten_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên đối tượng không được trống!'
                    })
        
        if(!dataUpdate_DT.Ma_nh_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã nhóm đối tượng không được trống!'
                    })
            
        if(!dataUpdate_DT.Ma_so_thue) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã số thuế không được trống!'
                    })

        // // CHECK MA
        const check_DT = await dmdtData.check_Dmdt(dataUpdate_DT.Ma_dt);
        if(check_DT.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã đối tượng ${dataUpdate_DT.Ma_dt} không tồn tại!`
                    })
    
        // UPDATE DATABASE 
        const data = await dmdtData.update_Dmdt(dataUpdate_DT);
        const update_DT = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(update_DT).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Cập nhật đối tượng không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Cập nhật đối tượng thành công!' ,
                update_DT
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


// FIND DOI TUONG
const find_Dmdt = async (req , res , next) => {
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
        const find_DT = await dmdtData.find_Dmdt(keyFind);

        if(find_DT.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Không tìm thấy kết quả nào phù hợp!'
                    })
            
            res.json({
                success: true ,
                find_DT
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
    getAll_Dmdt ,
    add_Dmdt ,
    delete_Dmdt ,
    update_Dmdt ,
    find_Dmdt
}