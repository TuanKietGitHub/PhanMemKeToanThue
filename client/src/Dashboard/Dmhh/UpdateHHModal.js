import React, { useEffect } from 'react'

import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

import Modal from 'react-bootstrap/Modal'



const UpdateHHModal = () => {

    // Contexts 
    const {
            appState: {
                find_VatTu
            } ,

            update_HH ,

            setShowUpdateHHModal ,

            setShowTableSearchDVT ,

            alertHH ,
            setAlertHH ,

            showUpdateHHModal ,

            setShowModalDvt ,
            setShowModalNhvt ,
            setShowModalTK ,

            DataUpdate_DVT ,
            setDataUpdate_DVT ,
            DataUpdate_NHHH ,
            setDataUpdate_NHHH ,
            
            setStatus_TKVT ,
            DataUpdate_TKVT ,
            setDataUpdate_TKVT ,
            
            setStatus_TKGV ,
            DataUpdate_TKGV ,
            setDataUpdate_TKGV ,
            
            setStatus_TKDT ,
            DataUpdate_TKDT ,
            setDataUpdate_TKDT ,

            handleMa ,
            handleTen ,
            handleGia ,
            handleNumber ,

            showModalDvt ,
            showModalNhvt ,
            showModalTK

        } = useContext(AppContext)
    
    // State
    const [UpdateDataMaVT , setUpdateDataMaVT] = useState(find_VatTu)
    const [UpdateDataGia , setUpdateDataGia] = useState(find_VatTu)
    const [UpdateDataInput , setUpdateDataInput] = useState(find_VatTu)
    const [DataUpdate_SL , setDataUpdate_SL] = useState(find_VatTu)
    const [UpdateDataTenVT , setUpdateDataTenVT] = useState(find_VatTu)

    const {Ma_vt} = UpdateDataMaVT
    const { Ten_vt } = UpdateDataTenVT
    const {Dvt} = DataUpdate_DVT
    const {Ma_nh , Ten_nh} = DataUpdate_NHHH
    const {Tk_vt , Ten_Tkvt} = DataUpdate_TKVT
    const {Tk_gv , Ten_Tkgv} = DataUpdate_TKGV
    const {Tk_dt , Ten_Tkdt} = DataUpdate_TKDT
    const { Sl_ton_min , Sl_ton_max } = DataUpdate_SL
    const { Ts , Loai_vt } = UpdateDataInput
    const { Gia_mua , Gia_ban , Gia_ban4 } = UpdateDataGia
    
    useEffect(() => setDataUpdate_DVT(find_VatTu) , [find_VatTu])
    useEffect(() => setDataUpdate_NHHH(find_VatTu) , [find_VatTu])
    useEffect(() => setDataUpdate_TKVT(find_VatTu) , [find_VatTu])
    useEffect(() => setDataUpdate_TKGV(find_VatTu) , [find_VatTu])
    useEffect(() => setDataUpdate_TKDT(find_VatTu) , [find_VatTu])

    useEffect(() => setUpdateDataMaVT(find_VatTu) , [find_VatTu])
    useEffect(() => setUpdateDataGia(find_VatTu) , [find_VatTu])
    useEffect(() => setUpdateDataInput(find_VatTu) , [find_VatTu])
    useEffect(() => setDataUpdate_SL(find_VatTu) , [find_VatTu])
    useEffect(() => setUpdateDataTenVT(find_VatTu) , [find_VatTu])

    const onChangeUpdateHHForm = event => {
        setUpdateDataTenVT({...UpdateDataTenVT , [event.target.name] : handleTen(event.target.value)})
        setUpdateDataInput({...UpdateDataInput , [event.target.name] : event.target.value})
        setUpdateDataGia({...UpdateDataGia , [event.target.name] : handleGia(event.target.value)})

        setDataUpdate_NHHH({...DataUpdate_NHHH , [event.target.name] : handleMa(event.target.value)})
        setDataUpdate_DVT({...DataUpdate_DVT , [event.target.name] : event.target.value})
        setDataUpdate_TKVT({...DataUpdate_TKVT , [event.target.name] : event.target.value})
        setDataUpdate_TKGV({...DataUpdate_TKGV , [event.target.name] : event.target.value})
        setDataUpdate_TKDT({...DataUpdate_TKDT , [event.target.name] : event.target.value})
        setDataUpdate_SL({...DataUpdate_SL , [event.target.name] : handleNumber(event.target.value)})
    }

    const UpdateHH = {Ma_vt , Ten_vt , Dvt , Ma_nh , Gia_mua , Gia_ban , Gia_ban4 , Ts , Loai_vt , Sl_ton_min , Sl_ton_max , Tk_vt , Tk_gv , Tk_dt}

    const onSubMit = async event => {
        event.preventDefault()
        if(!showModalDvt && !showModalNhvt && !showModalTK) {
            const {success , message } = await update_HH(UpdateHH)
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
        setUpdateDataInput(find_VatTu)
        setUpdateDataGia(find_VatTu)
        setShowUpdateHHModal(false)
        setShowTableSearchDVT(false)
        setUpdateDataMaVT(find_VatTu)
        setUpdateDataTenVT(find_VatTu)
        setDataUpdate_SL(find_VatTu)

        setDataUpdate_DVT(find_VatTu)
        setDataUpdate_NHHH(find_VatTu)
        setDataUpdate_TKVT(find_VatTu)
        setDataUpdate_TKGV(find_VatTu)
        setDataUpdate_TKDT(find_VatTu)
    }

    const Onclick_DVT = () => {
        setShowModalDvt(true)
    }

    const Onclick_NHVT = () => {
        setShowModalNhvt(true)
    }

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
                show={showUpdateHHModal}
                onHide={setAddData}
                dialogClassName ="modal-90w"
                aria-labelledby ="example-custom-modal-styling-title"
            >
                <Modal.Header className='Modal_header' closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Cập nhật vật tư
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className='Modal_body'>
                    {/* <form onSubmit={onSubMit}> */}
                        <div className="modal-body" >
                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Mã Vật Tư</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" placeholder="AHH001" name='Ma_vt' required value={Ma_vt} onChange={onChangeUpdateHHForm} disabled />
                                </div>

                                <label className="col-sm-2 col-form-label lable-modal-add">Barcode</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Tên Vật Tư</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control input-modal-add" name='Ten_vt' value={Ten_vt} onChange={onChangeUpdateHHForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Đơn Vị Tính</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Dvt' value={Dvt} onChange={onChangeUpdateHHForm} />
                                </div>
                                <button 
                                        className="col-sm-1 btnModal"  
                                        onClick = {Onclick_DVT}
                                >!</button>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Mã nhóm</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Ma_nh' value={Ma_nh} onChange={onChangeUpdateHHForm} />
                                </div>
                                <button 
                                        className="col-sm-1 btnModal"  
                                        onClick = {Onclick_NHVT}
                                >!</button>
                                <div className="col-sm-3" style={{paddingTop:'5px'}}> 
                                    <p className='name-input' >{Ten_nh}</p>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Giá mua</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Gia_mua' value={Gia_mua} onChange={onChangeUpdateHHForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Giá bán</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Gia_ban' value={Gia_ban} onChange={onChangeUpdateHHForm} />
                                </div>

                                <label className="col-sm-2 col-form-label lable-modal-add">Giá bán max</label>
                                <div className="col-sm-4">
                                    <input type="text" className="form-control input-modal-add" name='Gia_ban4' value={Gia_ban4} onChange={onChangeUpdateHHForm} />
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Thuế suất</label>
                                <div className="col-sm-2" style={{paddingBottom:'3px'}}>
                                    <select className="form-select pagination-select-modal" name='Ts' value={Ts} onChange={onChangeUpdateHHForm}>
                                        <option value={0} className="pagination-option">0</option>
                                        <option value={5} className="pagination-option">5</option>
                                        <option value={10} className="pagination-option">10</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Sl min</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Sl_ton_min' value={Sl_ton_min} onChange={onChangeUpdateHHForm}/>
                                </div>

                                <div className='col-sm-1'> </div>

                                <label className="col-sm-2 col-form-label lable-modal-add">Sl tồn max</label>
                                <div className="col-sm-2">
                                    <input type="text" className="form-control input-modal-add" name='Sl_ton_max' value={Sl_ton_max} onChange={onChangeUpdateHHForm}/>
                                </div>
                            </div>

                            <div className="form-group modal-add row">
                                <label className="col-sm-2 col-form-label lable-modal-add">Loại</label>
                                <div className="col-sm-2" style={{paddingBottom:'3px'}}>
                                    <select className="form-select pagination-select-modal" name='Loai_vt' value={Loai_vt} onChange={onChangeUpdateHHForm}>
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
                                    <input type="text" className="form-control input-modal-add" name='Tk_vt' value={Tk_vt} onChange={onChangeUpdateHHForm} />
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
                                    <input type="text" className="form-control input-modal-add" name='Tk_gv' value={Tk_gv} onChange={onChangeUpdateHHForm} />
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
                                    <input type="text" className="form-control input-modal-add" name='Tk_dt' value={Tk_dt} onChange={onChangeUpdateHHForm} />
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
                                    <select className="form-select pagination-select-modal" onChange={onChangeUpdateHHForm}>
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
                            <button type="submit" className="btn btn-success" onClick={onSubMit}>Ok (Ctrl Enter)</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={setAddData} >Close</button>
                        </div>
                    {/* </form> */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateHHModal
