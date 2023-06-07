import React, { useEffect } from 'react'

import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

import Modal from 'react-bootstrap/Modal'



const AddHHModal = () => {

    // Contexts 
    const {
            add_HH ,

            setShowAddHHModal ,

            setShowTableSearchDVT ,

            alertHH ,
            setAlertHH ,

            showAddHHModal ,

            setShowModalDvt ,
            setShowModalNhvt ,
            setShowModalTK ,

            DataAdd_DVT ,
            setDataAdd_DVT ,
            DataAdd_NHHH ,
            setDataAdd_NHHH ,

            setStatus_TKVT ,
            DataAdd_TKVT ,
            setDataAdd_TKVT ,

            setStatus_TKGV ,
            DataAdd_TKGV ,
            setDataAdd_TKGV ,

            setStatus_TKDT ,
            DataAdd_TKDT ,
            setDataAdd_TKDT ,

            handleMa ,
            handleTen ,
            handleGia ,
            handleNumber ,

            showModalDvt ,
            showModalNhvt ,
            showModalTK

        } = useContext(AppContext)
    
    // State
    const [NewDataMaVT , setNewDataMaVT] = useState({
        Ma_vt: ''
    })

    const [NewDataTenVT , setNewDataTenVT] = useState({
        Ten_vt: ''
    })

    const [NewDataGia , setNewDataGia] = useState({
        Gia_mua: '0' ,
        Gia_ban: '0' ,
        Gia_ban4: '0'
    })

    const [newDataInput , setnewDataInput] = useState({
        Ts: '10' ,
        Sd: '1' ,
        Loai_vt: '2'
    })

    const [DataAdd_SL , setDataAdd_SL] = useState({
        Sl_ton_min: '0' ,
        Sl_ton_max: '0' 
    })

    const {Ma_vt} = NewDataMaVT
    const { Ten_vt } = NewDataTenVT 
    const {Dvt} = DataAdd_DVT
    const {Ma_nh , Ten_nh} = DataAdd_NHHH
    const {Tk_vt , Ten_Tkvt} = DataAdd_TKVT
    const {Tk_gv , Ten_Tkgv} = DataAdd_TKGV
    const {Tk_dt , Ten_Tkdt} = DataAdd_TKDT
    const {Sl_ton_min , Sl_ton_max} = DataAdd_SL
    const {Ts , Loai_vt} = newDataInput
    const { Gia_mua , Gia_ban , Gia_ban4 } = NewDataGia
    
    useEffect(() => setDataAdd_DVT(DataAdd_DVT) , [])
    useEffect(() => setDataAdd_NHHH(DataAdd_NHHH) , [])
    useEffect(() => setDataAdd_TKVT(DataAdd_TKVT) , [])
    useEffect(() => setDataAdd_TKGV(DataAdd_TKGV) , [])
    useEffect(() => setDataAdd_TKDT(DataAdd_TKDT) , [])

    const onChangeNewHHForm = event => {
        setNewDataMaVT({...NewDataMaVT , [event.target.name] : handleMa(event.target.value)})
        setNewDataTenVT({...NewDataTenVT , [event.target.name] : handleTen(event.target.value)})
        setnewDataInput({...newDataInput , [event.target.name] : event.target.value})
        setNewDataGia({...NewDataGia , [event.target.name] : handleGia(event.target.value)})
        setDataAdd_NHHH({...DataAdd_NHHH , [event.target.name] : handleMa(event.target.value)})
        setDataAdd_DVT({...DataAdd_DVT , [event.target.name] : event.target.value})
        setDataAdd_TKVT({...DataAdd_TKVT , [event.target.name] : event.target.value})
        setDataAdd_TKGV({...DataAdd_TKGV , [event.target.name] : event.target.value})
        setDataAdd_TKDT({...DataAdd_TKDT , [event.target.name] : event.target.value})
        setDataAdd_SL({...DataAdd_SL , [event.target.name] : handleNumber(event.target.value)})
    }

    const newHH = {Ma_vt , Ten_vt , Dvt , Ma_nh , Gia_mua , Gia_ban , Gia_ban4 , Ts , Loai_vt , Sl_ton_min , Sl_ton_max , Tk_vt , Tk_gv , Tk_dt}

    const onSubMit = async event => {
        event.preventDefault()
        if(!showModalDvt && !showModalNhvt && !showModalTK) {
            const {success , message } = await add_HH(newHH)
            if(success) {
                setAlertHH ({
                    type: 'success' ,
                    message: message
                })
                setTimeout(() => {
            setAddData()
                }, 1000);
            }
            else {
                setAlertHH({
                    type: 'danger' ,
                    message: message
                })
            }
        }  
    }

    const setAddData = () => {
        setAlertHH({
            type: null ,
            message: ''
        })
        setNewDataTenVT({
            Ten_vt: ''
        })
        setnewDataInput({ 
            Ts: '10' ,
            Sd: '1' ,
            Loai_vt: '2' ,
            Sl_ton_min: '0' ,
            Sl_ton_max: '0'
        })
        setNewDataGia({
            Gia_mua: '0' ,
            Gia_ban: '0' ,
            Gia_ban4: '0'
        })
        setShowAddHHModal(false)
        setNewDataMaVT({
            Ma_vt: ''
        })
        setDataAdd_DVT({
            Dvt: ''
        })
        setDataAdd_NHHH({
            Ma_nh: 'HH' ,
            Ten_nh: 'Hàng hóa'
        })
        setDataAdd_TKVT({
            Tk_vt: '1222' ,
            Ten_Tkvt: 'Hàng hóa' 
        })
        setDataAdd_TKGV({
            Tk_gv: '666' ,
            Ten_Tkgv: 'Giá vốn bán hàng' 
        })
        setDataAdd_TKDT({
            Tk_dt: '555' ,
            Ten_Tkdt: 'Doanh thu bán hàng hóa'
        })
    }

    // const Onclick_DVT = () => {
    //     setShowModalDvt(true)
    // }

    // const Onclick_NHVT = () => {
    //     setShowModalNhvt(true)
    // }

    const Onclick_TKVT = () => {
        setStatus_TKVT(true)
        setShowModalTK(true)
    }

    const Onclick_TKGV = () => {
        setStatus_TKGV(true)
        setShowModalTK(true)
    }

    const Onclick_TKDT = () => {
        setStatus_TKDT(true)
        setShowModalTK(true)
    }

    return (
        <>
            <Modal
                show={showAddHHModal}
                onHide={setAddData}
                dialogClassName ="modal-90w"
                aria-labelledby ="example-custom-modal-styling-title"
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Thêm vật tư
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='Modal_body'>
                    <form onSubmit={onSubMit} >
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Mã Vật Tư</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" placeholder="AHH001" name='Ma_vt' required value={Ma_vt} onChange={onChangeNewHHForm} />
                                </div>

                                <label className="col-sm-2 col-form-label lable-modal-add">Barcode</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Tên Vật Tư</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control input-modal-add" name='Ten_vt' required value={Ten_vt} onChange={onChangeNewHHForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Đơn Vị Tính</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Dvt' value={Dvt} onChange={onChangeNewHHForm} />
                                </div>
                                <button 
                                        className="col-sm-1 btnModal"  
                                        onClick = {setShowModalDvt.bind(this , true)}
                                        
                                >!</button>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Mã nhóm</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Ma_nh' value={Ma_nh} onChange={onChangeNewHHForm} />
                                </div>
                                <button 
                                        className="col-sm-1 btnModal"  
                                        onClick = {setShowModalNhvt.bind(this , true)}
                                >!</button>
                                <div className="col-sm-3" style={{paddingTop:'5px'}}> 
                                    <p className='name-input' >{Ten_nh}</p>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Giá mua</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Gia_mua' value={Gia_mua} onChange={onChangeNewHHForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Giá bán</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Gia_ban' value={Gia_ban} onChange={onChangeNewHHForm} />
                                </div>

                                <label className="col-sm-2 col-form-label lable-modal-add">Giá bán max</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Gia_ban4' value={Gia_ban4} onChange={onChangeNewHHForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Thuế suất</label>
                                <div className="col-sm-2" style={{paddingBottom:'3px'}}>
                                    <select className="form-select pagination-select-modal" name='Ts' value={Ts} onChange={onChangeNewHHForm}>
                                        <option value={0} className="pagination-option">0</option>
                                        <option value={5} className="pagination-option">5</option>
                                        <option value={10} className="pagination-option">10</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Sl min</label>
                                <div className="col-sm-2">
                                    <input 
                                            type="text" 
                                            className="form-control input-modal-add" 
                                            name='Sl_ton_min' 
                                            value={Sl_ton_min} 
                                            onChange={onChangeNewHHForm}
                                    />
                                </div>

                                <div className='col-sm-1'> </div>

                                <label className="col-sm-2 col-form-label lable-modal-add">Sl tồn max</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Sl_ton_max' value={Sl_ton_max} onChange={onChangeNewHHForm}/>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Loại</label>
                                <div className="col-sm-2" style={{paddingBottom:'3px'}}>
                                    <select className="form-select pagination-select-modal" name='Loai_vt' value={Loai_vt} onChange={onChangeNewHHForm}>
                                        <option value={0} className="pagination-option">0</option>
                                        <option value={1} className="pagination-option">1</option>
                                        <option value={2} className="pagination-option">2</option>
                                        <option value={3} className="pagination-option">3</option>
                                    </select>
                                </div>
                                <label className="col-sm-8 col-form-label name-input">0- Nguyên vật liệu; 1- Thành phẩm; 2- Hàng hóa; 3- Dịch vụ</label>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add" >Tk vật tư</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Tk_vt' value={Tk_vt} onChange={onChangeNewHHForm} />
                                </div>
                                <button 
                                        className="col-sm-1 btnModal"
                                        onClick = {Onclick_TKVT}  
                                >!</button>

                                <div className="col-sm-3" style={{paddingTop:'5px'}}> 
                                    <p className='name-input' >{Ten_Tkvt}</p>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Tk giá vốn</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Tk_gv' value={Tk_gv} onChange={onChangeNewHHForm} />
                                </div>
                                <button 
                                        className="col-sm-1 btnModal"  
                                        onClick = {Onclick_TKGV}
                                >!</button>

                                <div className="col-sm-3" style={{paddingTop:'5px'}}> 
                                    <p className='name-input' >{Ten_Tkgv}</p>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Tk doanh thu</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Tk_dt' value={Tk_dt} onChange={onChangeNewHHForm} />
                                </div>
                                <button 
                                        className="col-sm-1 btnModal" 
                                        onClick = {Onclick_TKDT} 
                                >!</button>

                                <div className="col-sm-3" style={{paddingTop:'5px'}}> 
                                    <p className='name-input' >{Ten_Tkdt}</p>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Sử dụng</label>
                                <div className="col-sm-2">
                                    <select className="form-select pagination-select-modal">
                                        <option value={0} className="pagination-option">0</option>
                                        <option value={1} className="pagination-option">1</option>
                                    </select>
                                </div>
                                <label className="col-sm-8 col-form-label name-input">0- Không sử dụng; 1- Sử dụng;</label>
                            </div>
                        </div>

                        <div className={`alert alert-${alertHH.type} modal-add`} style={{height:'45px' , textAlign:'center'}}>
                            {alertHH.message}
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

export default AddHHModal
