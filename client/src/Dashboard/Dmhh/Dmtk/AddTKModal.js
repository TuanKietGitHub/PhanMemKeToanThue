import React, { useContext , useState } from 'react'
import { AppContext } from '../../../contexts/AppContext';

import { Modal } from 'react-bootstrap';

const AddTKModal = () => {
    // Contexts 
    const {
        add_TK ,

        alert ,
        setAlert ,

        ShowAddTKModal ,
        setShowAddTKModal ,

        handleMa ,
        handleTen
    } = useContext(AppContext)

    // New TK
    const [newDataTK , setNewDataTK] = useState({
        Loai_tk: 'T' ,
        Bac_tk: '1' ,
        Tk_nt: 'K' ,
        Tk_dt: 'K'
    })

    const [newDataMaTK , setNewDataMaTK] = useState({
        Tk: '' ,
        Tk_me: ''
    })

    const [newDataTen , setNewDataTen] = useState({
        Ten_tk: '' ,
    })

    const { Tk , Tk_me } = newDataMaTK
    const { Ten_tk } = newDataTen
    const { Loai_tk , Bac_tk , Tk_nt , Tk_dt } = newDataTK

    const onChangeNewTKForm = event => {
        setNewDataMaTK({...newDataMaTK , [event.target.name] : handleMa(event.target.value)})
        setNewDataTen({...newDataTen , [event.target.name] : handleTen(event.target.value)})
        setNewDataTK({...newDataTK , [event.target.name] : event.target.value})
    }

    const newTK = { Tk , Ten_tk , Loai_tk , Bac_tk , Tk_me , Tk_nt , Tk_dt }

    // Close
    const setAddData = () => {
        setNewDataTK({
            Loai_tk: 'T' ,
            Bac_tk: '1' ,
            Tk_nt: 'K' ,
            Tk_dt: 'K'
        })  
        setNewDataMaTK({
            Tk: '' ,
            Tk_me: ''
        })
        setNewDataTen({
            Ten_tk: ''
        })
        setShowAddTKModal(false)
        setAlert ({
            type: null ,
            message: ''
        })
    }

    // Onsubmit 
    const onSubMit = async event => {
        event.preventDefault()
        const {success , message } = await add_TK(newTK)
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
                show={ShowAddTKModal}
                onHide={setAddData}
                dialogClassName ="modal-70w"
                aria-labelledby ="example-custom-modal-styling-title" 
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Thêm tài khoản
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubMit}>  
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tài khoản</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Tk' required value={Tk} onChange={onChangeNewTKForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Tên tài khoản</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control input-modal-add" name='Ten_tk' required value={Ten_tk} onChange={onChangeNewTKForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Loại tài khoản</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal" name='Loai_tk' value={Loai_tk} onChange={onChangeNewTKForm}>
                                        <option value='T' className="pagination-option" >Tổng hợp</option>
                                        <option value='C' className="pagination-option" >Chi tiết</option>
                                    </select>                                
                                </div>
                            </div> 

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Bậc tài khoản</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal" name='Bac_tk' value={Bac_tk} onChange={onChangeNewTKForm}>
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
                                    <input type="text" className="form-control input-modal-add" name='Tk_me' value={Tk_me} onChange={onChangeNewTKForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Theo dõi ngoại tệ</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal" name='Tk_nt' value={Tk_nt} onChange={onChangeNewTKForm}>
                                        <option value='K' className="pagination-option">Không</option>
                                        <option value='C' className="pagination-option">Có</option>
                                    </select>                                
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-3 col-form-label lable-modal-add">Theo dõi công nợ</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal" name='Tk_dt' value={Tk_dt} onChange={onChangeNewTKForm}>
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={setAddData} >Close</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddTKModal
