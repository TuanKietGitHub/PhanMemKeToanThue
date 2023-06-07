
const dmnhdtData = require('../data/Dmnhdt');

// GET ALL NHOM DOI TUONG
const getAllDmnhdt = async (req , res , next) => {
    try {
        const list_Dmnhdt = await dmnhdtData.getAllDmnhdt();

        res.json({
            success: true ,
            list_Dmnhdt 
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
const addDmnhdt = async (req , res , next) => {
    try {
        // GET DATA
        const new_NH_DT = {
                Ma_nh_dt: req.body.Ma_nh_dt.trim() , 
                Ten_nh_dt: req.body.Ten_nh_dt.trim()
            };

        // CHECK NULL
        if(!new_NH_DT.Ma_nh_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã nhóm đối tượng không được trống!'
                    })
        
        if(!new_NH_DT.Ten_nh_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên nhóm đối tượng không được trống!'
                    })
        
        // CHECK MA
        const check_NH_DT = await dmnhdtData.check_Manhdt(new_NH_DT.Ma_nh_dt);
        if(!(check_NH_DT.length === 0))
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã nhóm đối tượng ${new_NH_DT.Ma_nh_dt} đã tồn tại!`
                    })
    
        // ADD DATABASE 
        const data = await dmnhdtData.create_Dmnhdt(new_NH_DT);
        const addDmnhdt = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(addDmnhdt).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Thêm nhóm đối tượng không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Thêm nhóm đối tượng thành công!' ,
                addDmnhdt
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


//  DELETE NHOM DOI TUONG 
const deleteDmnhdt = async (req , res , next) => {
    try {
        const Ma_nh_dt = req.params.Ma_nh_dt.trim();

        // CHECK NULL
        if(!Ma_nh_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false , 
                        message: 'Mã đối tượng rỗng!'
                    })
        
        // CHECK MA DOI TUONG
        const check_NH_DT = await dmnhdtData.check_Manhdt(Ma_nh_dt);
        if(check_NH_DT.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã đối tượng ${Ma_nh_dt} không tồn tại!`
                    })
        
        // DELETE DATABASE 
        const data = await dmnhdtData.delete_Dmnhdt(Ma_nh_dt);
        const deleteDmnhdt = data.reduce((a , b) => Object.assign(a , b) , {});
        if(Object.values(deleteDmnhdt) === 0)
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: `Xóa đối tượng ${Ma_nh_dt} không thành công!`
                    })

            res.json({
                success: true ,
                message: `Xóa đối tượng ${Ma_nh_dt} thành công!` ,
                deleteDmnhdt
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
const updateDmnhdt = async (req , res , next) => {
    try {
        // GET DATA
        const update_NH_DT = {
                                Ma_nh_dt: req.body.Ma_nh_dt.trim() , 
                                Ten_nh_dt: req.body.Ten_nh_dt.trim()
                            };

        // CHECK NULL
        if(!update_NH_DT.Ma_nh_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã nhóm đối tượng không được trống!'
                    })
        
        if(!update_NH_DT.Ten_nh_dt) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên nhóm đối tượng không được trống!'
                    })
        
        // CHECK MA
        const check_NH_DT = await dmnhdtData.check_Manhdt(update_NH_DT.Ma_nh_dt);
        if(check_NH_DT.length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã đối tượng ${update_NH_DT.Ma_nh_dt} không tồn tại!`
                    })
    
        // UPDATE DATABASE 
        const data = await dmnhdtData.update_Dmnhdt(update_NH_DT);
        const updateDmnhdt = data.reduce((a , b) => Object.assign(a, b), {});

        if(Object.values(updateDmnhdt).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Cập nhật nhóm đối tượng không thành công!'
                    })
            
            res.json({
                success: true ,
                message: 'Cập nhật nhóm đối tượng thành công!' ,
                updateDmnhdt
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


// FIND NHOM DOI TUONG 
const findDmnhdt = async (req , res , next) => {
    try {
        const keyFind = req.params.find.trim();

        // Check null
        if(!keyFind)
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Không có từ khóa tìm kiêm!'
                    })
            
            // Find database
            const findDmnhdt = await dmnhdtData.find_Dmnhdt(keyFind);
                
                res.json({
                    success: true ,
                    findDmnhdt
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
    getAllDmnhdt ,
    addDmnhdt ,
    deleteDmnhdt ,
    updateDmnhdt ,
    findDmnhdt
}