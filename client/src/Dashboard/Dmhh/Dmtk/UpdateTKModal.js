import React, { useContext , useEffect, useState } from 'react'
import { AppContext } from '../../../contexts/AppContext';

import { Modal } from 'react-bootstrap';

const UpdateTKModal = () => {
    // Contexts 
    const {
        appState: {
            find_TaiKhoan
        } ,

        update_TK ,

        alert ,
        setAlert ,

        ShowUpdateTKModal ,
        setShowUpdateTKModal ,

        handleMa ,
        handleTen
    } = useContext(AppContext)

    // Update TK
    const [updateDataTK , setUpdateDataTK] = useState(find_TaiKhoan)
    const [updateDataMaTK , setUpdateDataMaTK] = useState(find_TaiKhoan)
    const [updateDataTenTK , setUpdateDataTenTK] = useState(find_TaiKhoan)

    useEffect(() => setUpdateDataTK(find_TaiKhoan) , [find_TaiKhoan])
    useEffect(() => setUpdateDataMaTK(find_TaiKhoan) , [find_TaiKhoan])
    useEffect(() => setUpdateDataTenTK(find_TaiKhoan) , [find_TaiKhoan])

    const { Tk ,   Tk_me } = updateDataMaTK
    const { Ten_tk } = updateDataTenTK
    const { Loai_tk , Bac_tk , Tk_nt , Tk_dt } = updateDataTK

    const onChangeUpdateTKForm = event => {
        setUpdateDataTK({...updateDataTK , [event.target.name] : event.target.value})
        setUpdateDataMaTK({...updateDataMaTK , [event.target.name] : handleMa(event.target.value)})
        setUpdateDataTenTK({...updateDataTenTK , [event.target.name] : handleTen(event.target.value)})

    }

    // Data Update
    const updateTK = { Tk , Ten_tk , Loai_tk , Bac_tk , Tk_me , Tk_nt , Tk_dt }

    // Close
    const setUpdateData = () => {
        setUpdateDataTK(find_TaiKhoan)  
        setUpdateDataMaTK(find_TaiKhoan)
        setUpdateDataTenTK(find_TaiKhoan)
        setShowUpdateTKModal(false)
        setAlert ({
            type: null ,
            message: ''
        })
    }

    // Onsubmit 
    const onSubMit = async event => {
        event.preventDefault()
        const {success , message } = await update_TK(updateTK)
        if(success) {
            setAlert ({
                type: 'success' ,
                message: message
            })
            setTimeout(() => {
                setUpdateData()
            }, 1000);
        }
        else {
            setAlert({
                type: 'danger' ,
                message: message
            })
        }
    }

    return (
        <>
            <Modal 
                show={ShowUpdateTKModal}
                onHide={setUpdateData}
                dialogClassName ="modal-70w"
                aria-labelledby ="example-custom-modal-styling-title" 
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Cập nhật tài khoản
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubMit}>  
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tài khoản</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Tk' required value={Tk} onChange={onChangeUpdateTKForm}  disabled/>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tên tài khoản</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control input-modal-add" name='Ten_tk' required value={Ten_tk} onChange={onChangeUpdateTKForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Loại tài khoản</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal" name='Loai_tk' value={Loai_tk} onChange={onChangeUpdateTKForm}>
                                        <option value='T' className="pagination-option" >Tổng hợp</option>
                                        <option value='C' className="pagination-option" >Chi tiết</option>
                                    </select>                                
                                </div>
                            </div> 

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Bậc tài khoản</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal" name='Bac_tk' value={Bac_tk} onChange={onChangeUpdateTKForm}>
                                        <option value={1} className="pagination-option">1</option>
                                        <option value={2} className="pagination-option">2</option>
                                        <option value={3} className="pagination-option">3</option>
                                        <option value={4} className="pagination-option">4</option>
                                        <option value={5} className="pagination-option">5</option>
                                    </select>                                 
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tài khoản mẹ</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Tk_me' value={Tk_me} onChange={onChangeUpdateTKForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Theo dõi ngoại tệ</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal" name='Tk_nt' value={Tk_nt} onChange={onChangeUpdateTKForm}>
                                        <option value='K' className="pagination-option">Không</option>
                                        <option value='C' className="pagination-option">Có</option>
                                    </select>                                
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Theo dõi công nợ</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal" name='Tk_dt' value={Tk_dt} onChange={onChangeUpdateTKForm}>
                                        <option value='K' className="pagination-option">Không</option>
                                        <option value='C' className="pagination-option">Có</option>
                                    </select>                                
                                </div>
                            </div>
                        </div>
                        

                        <div className={`alert alert-${alert.type} modal-add`} style={{height:'45px' , textAlign:'center'}}>
                            {alert.message}
                        </div>

                        <div className="modal-footer Modal_footer">
                            <button type="submit" className="btn btn-success" >Ok (Ctrl Enter)</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={setUpdateData} >Close</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateTKModal
