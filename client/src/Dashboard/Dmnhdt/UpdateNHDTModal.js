import React, { useContext, useState , useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { AppContext } from '../../contexts/AppContext'

const UpdateNHDTModal = () => {

    // Contexts
    const {
        appState: {
            find_NhomDoiTuong
        } ,

        update_NHDT , 
        
        handleTen ,

        showUpdateNHDTModal ,
        setShowUpdateNHDTModal ,

        alert ,
        setAlert
    } = useContext(AppContext)


    const [ updateMaNHDT , setUpdateMaNHDT] = useState(find_NhomDoiTuong)
    const [ updateTenNHDT , setUpdateTenNHDT ] = useState(find_NhomDoiTuong)   

    useEffect(() => setUpdateMaNHDT(find_NhomDoiTuong) , [find_NhomDoiTuong])
    useEffect(() => setUpdateTenNHDT(find_NhomDoiTuong) , [find_NhomDoiTuong])

    const { Ma_nh_dt } = updateMaNHDT
    const { Ten_nh_dt } = updateTenNHDT

    const onChangeNewNHDTForm = (event) => {
        setUpdateTenNHDT({...updateTenNHDT , [event.target.name] : handleTen(event.target.value) })
    }

    const updateNHDT = { Ma_nh_dt , Ten_nh_dt }

    // Close 
    const setAddData = () => {
        setShowUpdateNHDTModal(false)
        setUpdateMaNHDT(find_NhomDoiTuong)
        setUpdateTenNHDT(find_NhomDoiTuong)
        setAlert({
            type: null ,
            message: ""
        })
        
    }

    // On Sunmit 
    const onSubMit = async event => {
        event.preventDefault()
        const {success , message } = await update_NHDT(updateNHDT)
        if(success) {
            setAlert ({
                type: 'success' ,
                message: message
            })
            setTimeout(() => {
                setAddData()
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
                show={showUpdateNHDTModal}
                onHide={setAddData}
                aria-labelledby ="example-custom-modal-styling-title" 
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Cập nhật nhóm đối tượng 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubMit}>  
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Mã nhóm</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Ma_nh_dt' required value={Ma_nh_dt} onChange={onChangeNewNHDTForm} disabled/>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tên nhóm</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control input-modal-add" name='Ten_nh_dt'  value={Ten_nh_dt} onChange={onChangeNewNHDTForm} />
                                </div>
                            </div>
                        </div>
                        

                        <div className={`alert alert-${alert.type} modal-add`} style={{height:'45px' , textAlign:'center'}}>
                            {alert.message}
                        </div>

                        <div className="modal-footer Modal_footer">
                            <button type="submit" className="btn btn-success" >Ok (Ctrl Enter)</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={setAddData} >Close</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateNHDTModal
