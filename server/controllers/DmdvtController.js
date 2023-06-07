const dmdvtData = require('../data/Dmdvt');
const handlingString = require('./handlingString');

// Get All Don Vi Tinh
const GetAllDmdvt = async (req , res , next) => {
    try {
        const listDmdvt = await dmdvtData.getALLDmdvt();

        res.json({
            success: true ,
            listDmdvt
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

// Create Don Vi Tinh 
const addDmdvt = async (req , res , next) => {
    try {
        const { Dvt } = req.body;
        const new_DVT = { Dvt };

        // Check null 
        if(!new_DVT.Dvt)
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Đơn vị tính không được trống!'
                    }) 
        
        // Check trùng trên database 
        const check_DVT = await dmdvtData.check_Dvt_Dmdvt(new_DVT.Dvt);
        if(!(check_DVT.length === 0)) 
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: `Đơn vị tính ${new_DVT.Dvt} đã tồn tại!`
                    })
        
        // Add vào database
        const data = await dmdvtData.create_Dmdvt(new_DVT);
        const addDmdvt = data.reduce((a, b) => Object.assign(a, b), {});
        if(Object.values(addDmdvt).length === 0)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Thêm đơn vị tính không thành công!'
                    })

            res.json({
                success: true ,
                message: 'Thêm đơn vị tính thành công!' ,
                addDmdvt
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

// Delete DVT 
const deleteDmdvt = async (req , res , next) => {
    try {
        const dvt = req.params.Dvt.trim();
        // Check null
        if(!dvt)
        return res 
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Đơn vị tính rỗng!'
                    })

        // Delete database 
        const data = await dmdvtData.delete_Dmdvt(dvt);
        const deleteDmdvt = data.reduce((a, b) => Object.assign(a, b), {});

        if(Object.values(deleteDmdvt).length === 0)
        return res  
                    .status(400)
                    .json({
                        success: false ,
                        message: `Không tìm thấy đơn vị tính ${dvt}!`
                    })
            
            res.json({
                success: true ,
                message: `Xóa đơn vị tính ${dvt} thành công!` ,
                deleteDmdvt
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

// Update DVT 
const updateDmdvt = async (req , res , next) => {
    try {
        const { Dvt , Dvt_eng } = req.body.trim();
        const dataUpdate = { Dvt , Dvt_eng };

        // Check null 
        if(!dataUpdate.Dvt)
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Đơn vị tính không được trống!'
                    }) 
        
        // Check trùng trên database 
        const check_DVT = await dmdvtData.check_Dvt_Dmdvt(dataUpdate.Dvt);
        if(check_DVT.length === 0) 
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: `Đơn vị tính ${dataUpdate.Dvt} không tồn tại!`
                    })       
        
        // Update database 
        const data = await dmdvtData.update_Dmdvt(dataUpdate);
        const updateDmdvt = data.reduce((a, b) => Object.assign(a, b), {});

        if(Object.values(updateDmdvt).length === 0)
        return res  
                    .status(400)
                    .json({
                        success: false ,
                        message: `Không tìm thấy đơn vị tính ${handle_dvt}!`
                    })

            res.json({
                success: true ,
                message: `Cập nhật đơn vị tính ${dataUpdate.Dvt} thành công!` ,
                updateDmdvt
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

// Find DVT 
const findDmdvt = async (req , res , next) => {
    try {
        const keyFind = req.params.find.trim();

        // Check null
        if(!keyFind)
        return res
                    .status(400)
                    .json({
                        success: false ,
                        message: 'Không có từ khóa tìm kiếm!'
                    })
            
            // Find database
            const findDmdvt = await dmdvtData.find_Dmdvt(keyFind);

            res.json({
                success: true ,
                findDmdvt
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
    GetAllDmdvt ,
    addDmdvt ,
    deleteDmdvt ,
    updateDmdvt ,
    findDmdvt
}