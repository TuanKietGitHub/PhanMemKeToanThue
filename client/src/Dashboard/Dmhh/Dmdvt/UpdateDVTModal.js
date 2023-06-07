import React, { useContext , useState , useEffect } from 'react'
import { AppContext } from '../../../contexts/AppContext';

import { Modal } from 'react-bootstrap';

const UpdateDVTModal = () => {
    // Contexts 
    const {
        appState: {
            find_DonViTinh
        } ,
        update_DVT ,
        
        alert ,
        setAlert ,

        showUpdateDVTModal ,
        setShowUpdateDVTModal 
    } = useContext(AppContext)

    // New Dvt
    const [updateDVT , setUpdateDVT] = useState(find_DonViTinh)

    useEffect(() => setUpdateDVT(find_DonViTinh) , [find_DonViTinh])

    const { Dvt } = updateDVT

    const onChangeUpdateDVTForm = event => setUpdateDVT({...updateDVT , [event.target.name] : event.target.value})
    
    // Close
    const setAddData = () => {
        setUpdateDVT(find_DonViTinh)
        setShowUpdateDVTModal(false)
        setAlert ({
            type: null ,
            message: ''
        })
    }

    // Onsubmit 
    const onSubMit = async event => {
        event.preventDefault()
        // const {success , message } = await update_DVT(updateDVT)
        // if(success) {
        //     setAlert ({
        //         type: 'success' ,
        //         message: message
        //     })
        //     setTimeout(() => {
        //         setAddData()
        //     }, 1000);
        // }
        // else {
        //     setAlert({
        //         type: 'danger' ,
        //         message: message
        //     })
        // }
    }

    return (
        <>
            <Modal 
                show={showUpdateDVTModal}
                onHide={setAddData}
                aria-labelledby ="example-custom-modal-styling-title" 
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Cập nhật đơn vị tính
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubMit}>  
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Đơn vị tính</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control input-modal-add" name='Dvt' value={Dvt} onChange={onChangeUpdateDVTForm} disabled/>
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

export default UpdateDVTModal
