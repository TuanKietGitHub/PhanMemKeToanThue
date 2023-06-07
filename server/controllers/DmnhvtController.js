
const dmnhvtData = require('../data/Dmnhvt');
const handlingString = require('./handlingString');

// Get All nhom vat tu
const getAllDmnhvt = async (req , res , next) => {
    try {
        const listDmnhvt = await dmnhvtData.getAllDmnhvt();

            res.json({
                success: true,
                listDmnhvt
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

// const dataTrim = (obj) => {
//     let data = Object.fromEntries(
//         Object.entries(obj).map(([key , value]) => [key , value.trim()])
//     );
//     return data;
// }

// Them vat tu
const addDmnhvt = async (req , res , next) => {
    try {
        const { 
                Ma_nh , 
                Ten_nh , 
                Stt_nh 
            } = req.body;

        const new_NH_VT = {
                Ma_nh , 
                Ten_nh , 
                Stt_nh 
            };

        // Check rỗng
        if(!new_NH_VT.Ma_nh) 
            return res 
                        .status(400)
                        .json({
                            success: false ,
                            message: 'Mã vật tư không được trống'
                        })

        if(!new_NH_VT.Ten_nh)
            return res 
                        .status(400)
                        .json({
                            success: false ,
                            message: 'Tên vật tư không được trống'
                        })         

        // Check trùng mã
        const check_Ma_NH_VT = await dmnhvtData.check_Manhvt_Dmnhvt(new_NH_VT.Ma_nh);
        
        if(!(check_Ma_NH_VT.length === 0))
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã vật tư ${new_NH_VT.Ma_nh} đã tồn tại`
                    })

        // Add vào database 
        const data = await dmnhvtData.create_Dmnhvt(new_NH_VT);
        const addDmnhvt = data.reduce((a, b) => Object.assign(a, b), {});
        
        if(Object.values(addDmnhvt).length === 0) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Thêm vật tư không thành công!'
                    })

            res.json({
                success: true ,
                message: 'Thêm vật tư thành công!' ,
                addDmnhvt
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

// Xoa vat tu
const deleteDmnhvt = async (req , res , next) => {
    try {
        const id_Ma_nh = req.params.id_Ma_nh;

        // Check null
        if(!id_Ma_nh) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã vật tư rỗng!'
                    })
        
        // Delete trên database
        const data = await dmnhvtData.delete_Dmnhvt(id_Ma_nh);
        const deleteDmnhvt = data.reduce((a, b) => Object.assign(a, b), {});
        
        if(Object.values(deleteDmnhvt).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `không tìm thấy mã vật tư ${id_Ma_nh}!`
                    })

            res.json({
                success: true ,
                message: `Xóa vật tư ${id_Ma_nh} thành công!` ,
                deleteDmnhvt
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

// Cap nhat vat tu
const updateDmnhvt = async (req , res , next) => {
    try {
        const {
                Ma_nh , 
                Ten_nh , 
                Stt_nh
            } = req.body;

        const dataUpdate = {
                Ma_nh , 
                Ten_nh , 
                Stt_nh 
            };

        // Check null Ma_nh , Ten_nh 
        if(!dataUpdate.Ma_nh) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Mã vật tư rỗng!'
                    })

        if(!dataUpdate.Ten_nh)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Tên vật tư không được trống!'
                    })

        // Check trùng mã
        const check_Ma_NH_VT = await dmnhvtData.check_Manhvt_Dmnhvt(dataUpdate.Ma_nh);
        
        if(check_Ma_NH_VT.length === 0)
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: `Mã vật tư ${new_NH_VT.Ma_nh} không tồn tại!`
                    })

        // Update trên database 
        const data = await dmnhvtData.update_Dmnhvt(dataUpdate);
        const updateDmnhvt = data.reduce((a, b) => Object.assign(a , b) , {});

        if(Object.values(updateDmnhvt).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: `Không tìm thấy mã vật tư ${dataUpdate.Ma_nh}!`
                    })

            res.json({
                success: true ,
                message: `Cập nhật mã vật tư ${dataUpdate.Ma_nh} thành công!` ,
                updateDmnhvt
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

// Tim kiem vat tu
const findDmnhvt = async (req , res , next) => {
    try {
        const keyFind = req.params.find;

        // Check null
        if(!keyFind) 
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Không có từ khóa tìm kiếm!'
                    })

        // Tìm kiếm vật tư
        const findDmnhvt = await dmnhvtData.find_Dmnhvt(keyFind);
            res.json({
                success: true ,
                findDmnhvt
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
    getAllDmnhvt ,
    addDmnhvt ,
    deleteDmnhvt ,
    updateDmnhvt ,
    findDmnhvt
}