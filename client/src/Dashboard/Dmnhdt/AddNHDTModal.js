import React, { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { AppContext } from '../../contexts/AppContext'

const AddNHDTModal = () => {

    // Contexts
    const {
        add_NHDT , 

        handleMa ,
        handleTen ,

        showAddNHDTModal ,
        setShowAddNHDTModal ,

        alert ,
        setAlert
    } = useContext(AppContext)


    const [newMaNHDT , setNewMaNHDT] = useState({
        Ma_nh_dt: '' 
    })

    const [ newTenNHDT , setNewTenNHDT ] = useState({
        Ten_nh_dt: ''
    })   

    const { Ma_nh_dt } = newMaNHDT
    const { Ten_nh_dt } = newTenNHDT

    const onChangeNewNHDTForm = (event) => {
        setNewMaNHDT({...newMaNHDT , [event.target.name] : handleMa(event.target.value) })
        setNewTenNHDT({...newTenNHDT , [event.target.name] : handleTen(event.target.value) })
    }

    const newNHDT = { Ma_nh_dt , Ten_nh_dt }

    // Close 
    const setAddData = () => {
        setShowAddNHDTModal(false)
        setNewMaNHDT({
            Ma_nh_dt: ''
        })
        setNewTenNHDT({
            Ten_nh_dt: ''
        })
        setAlert ({
            type: null ,
            message: ""
        })
        
    }

    // On Sunmit 
    const onSubMit = async event => {
        event.preventDefault()
        const {success , message } = await add_NHDT(newNHDT)
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
                show={showAddNHDTModal}
                onHide={setAddData}
                aria-labelledby ="example-custom-modal-styling-title" 
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Thêm nhóm đối tượng 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubMit}>  
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Mã nhóm</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Ma_nh_dt' required value={Ma_nh_dt} onChange={onChangeNewNHDTForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tên nhóm</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control input-modal-add" name='Ten_nh_dt' required value={Ten_nh_dt} onChange={onChangeNewNHDTForm} />
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

export default AddNHDTModal
