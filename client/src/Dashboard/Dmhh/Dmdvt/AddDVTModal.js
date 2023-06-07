import React, { useContext , useState } from 'react'
import { AppContext } from '../../../contexts/AppContext';

import { Modal } from 'react-bootstrap';

const AddDVTModal = () => {
    // Contexts 
    const {
        add_DVT ,
        alert ,
        setAlert ,
        showAddDVTModal ,
        setShowAddDVTModal ,

        handleTen
    } = useContext(AppContext)

    // New Dvt
    const [newDVT , setNewDVT] = useState({
        Dvt: ''
    })

    const { Dvt } = newDVT

    const onChangeNewDVTForm = event => setNewDVT({...newDVT , [event.target.name] : handleTen(event.target.value)})

    // Close
    const setAddData = () => {
        setNewDVT({
            Dvt: ''
        })
        setShowAddDVTModal(false)
        setAlert ({
            type: null ,
            message: ''
        })
    }

    // Onsubmit 
    const onSubMit = async event => {
        event.preventDefault()
        const {success , message } = await add_DVT(newDVT)
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
                show={showAddDVTModal}
                onHide={setAddData}
                aria-labelledby ="example-custom-modal-styling-title" 
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Thêm đơn vị tính
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubMit}>  
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Đơn vị tính</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control input-modal-add" name='Dvt' required value={Dvt} onChange={onChangeNewDVTForm} />
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

export default AddDVTModal
