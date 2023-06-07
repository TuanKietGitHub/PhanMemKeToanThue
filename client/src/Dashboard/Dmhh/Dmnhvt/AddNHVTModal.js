import React, { useContext , useState } from 'react'
import { AppContext } from '../../../contexts/AppContext';

import { Modal } from 'react-bootstrap';

const AddNHVTModal = () => {
    // Contexts 
    const {
        add_NHVT ,

        alert ,
        setAlert ,

        ShowAddNHVTModal ,
        setShowAddNHVTModal ,

        handleMa ,
        handleTen
    } = useContext(AppContext)

    // New NHVT
    const [NewMaNHVT , setNewMaNHVT] = useState({
        Ma_nh: '' 
    })

    const [NewTenNHVT , setNewTenNHVT] = useState({
        Ten_nh: ''
    })

    const [newNHVT , setNewNHVT] = useState({
        Stt_nh: '1'
    })

    const { Ma_nh } = NewMaNHVT
    const { Ten_nh } = NewTenNHVT
    const { Stt_nh } = newNHVT

    const onChangeNewNHVTForm = event => {
        setNewNHVT({...newNHVT , [event.target.name] : event.target.value})
        setNewMaNHVT({...NewMaNHVT , [event.target.name] : handleMa(event.target.value)})
        setNewTenNHVT({...NewTenNHVT , [event.target.name] : handleTen(event.target.value)})
    }

    const newNH_VT = { Ma_nh , Ten_nh , Stt_nh }

    // Close
    const setAddData = () => {
        setNewMaNHVT({
            Ma_nh: '' 
        })
        setNewNHVT({
            Stt_nh: '1'
        })  
        setNewTenNHVT({
            Ten_nh: ''
        })
        setShowAddNHVTModal(false)
        setAlert ({
            type: null ,
            message: ''
        })
    }

    // Onsubmit 
    const onSubMit = async event => {
        event.preventDefault()
        const {success , message } = await add_NHVT(newNH_VT)
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
                show={ShowAddNHVTModal}
                onHide={setAddData}
                aria-labelledby ="example-custom-modal-styling-title" 
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Thêm nhóm vật tư
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubMit}>  
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Mã nhóm</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Ma_nh' required value={Ma_nh} onChange={onChangeNewNHVTForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tên nhóm</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control input-modal-add" name='Ten_nh' required value={Ten_nh} onChange={onChangeNewNHVTForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Thứ tự</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Stt_nh' value={Stt_nh} onChange={onChangeNewNHVTForm} />
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

export default AddNHVTModal
