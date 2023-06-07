import React, { useContext , useState , useEffect } from 'react'
import { AppContext } from '../../../contexts/AppContext';

import { Modal } from 'react-bootstrap';

const UpdateNHVTModal = () => {
    // Contexts 
    const {
        appState: {
            find_NhomVatTu
        } ,
        update_NHVT ,

        alert ,
        setAlert ,

        ShowUpdateNHVTModal ,
        setShowUpdateNHVTModal ,

        handleTen
    } = useContext(AppContext)

    // Update NHVT
    const [UpdateMaNHVT , setUpdateMaNHVT] = useState(find_NhomVatTu)
    const [UpdateDataNHVT , setUpdateDataNHVT] = useState(find_NhomVatTu)
    const [UpdateTenNHVT , setUpdateTenNHVT] = useState(find_NhomVatTu)

    useEffect(() => setUpdateMaNHVT(find_NhomVatTu) , [find_NhomVatTu])
    useEffect(() => setUpdateDataNHVT(find_NhomVatTu) , [find_NhomVatTu])
    useEffect(() => setUpdateTenNHVT(find_NhomVatTu) , [find_NhomVatTu])

    const { Ma_nh } = UpdateMaNHVT
    const { Ten_nh }  = UpdateTenNHVT
    const { Stt_nh } = UpdateDataNHVT

    const onChangeUpdateNHVTForm = event => {
        setUpdateDataNHVT({...UpdateDataNHVT , [event.target.name] : event.target.value})
        setUpdateTenNHVT({...UpdateTenNHVT , [event.target.name] : handleTen(event.target.value)})
    }

    const UpdateNHVT = { Ma_nh , Ten_nh , Stt_nh }

    // Close
    const setAddData = () => {
        setUpdateMaNHVT(find_NhomVatTu)
        setUpdateDataNHVT(find_NhomVatTu) 
        setUpdateTenNHVT(find_NhomVatTu) 
        setShowUpdateNHVTModal(false)
        setAlert ({
            type: null ,
            message: ''
        })
    }

    // Onsubmit 
    const onSubMit = async event => {
        event.preventDefault()
        const {success , message } = await update_NHVT(UpdateNHVT)
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
                show={ShowUpdateNHVTModal}
                onHide={setAddData}
                aria-labelledby ="example-custom-modal-styling-title" 
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Cập nhật nhóm vật tư
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubMit}>  
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Mã nhóm</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Ma_nh' required value={Ma_nh} onChange={onChangeUpdateNHVTForm} disabled/>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tên nhóm</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control input-modal-add" name='Ten_nh' required value={Ten_nh} onChange={onChangeUpdateNHVTForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Thứ tự</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Stt_nh' value={Stt_nh} onChange={onChangeUpdateNHVTForm} />
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

export default UpdateNHVTModal
