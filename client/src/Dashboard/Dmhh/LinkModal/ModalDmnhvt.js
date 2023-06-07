import { useContext , useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import { AppContext } from '../../../contexts/AppContext'

import iconRefresh from '../../../assets/refresh.svg'
import PaginationNHVT from '../Dmnhvt/PaginationNHVT'
import PaginationSearchNHVT from '../Dmnhvt/PaginationSearchNHVT'

const ModalDmnhvt = () => {

    // Contexts 
    const {
        get_NHVT ,
        find_NHVT_Full ,

        showModalNhvt ,
        setShowModalNhvt ,

        setShowAddNHVTModal ,

        setCurrentPageModal ,

        setSizePageModal ,

        setPageNumberLimitModal ,

        setMaxPageNumberLimitModal ,

        setMinPageNumberLimitModal ,

        showTableSearchNHVT ,
        setShowTableSearchNHVT

    } = useContext(AppContext)

    useEffect(() => get_NHVT() , [])

    // Close
    const closeDialog = () => {
        setSizePageModal(5)
        setCurrentPageModal(1)
        setPageNumberLimitModal(5)
        setMaxPageNumberLimitModal(5)
        setMinPageNumberLimitModal(0)

        setShowModalNhvt(false)
        setShowTableSearchNHVT(false)
        setKeySearch({
            search: ''
        })
    }

    // Modal add
    const showModalAdd = () => {
        setShowTableSearchNHVT(false)
        setKeySearch({
            search: ''
        })
        setShowAddNHVTModal(true)
    }

    // Form search 
    const [keySearch , setKeySearch] = useState({
        search: ''
    })

    const {search} = keySearch

    const onChangeSearch = event => setKeySearch({...keySearch , [event.target.name] : event.target.value })

    const setSearch = async event => {
        if(keySearch.search !== '') {
            await find_NHVT_Full(keySearch)
            setCurrentPageModal(1)
            setShowTableSearchNHVT(true)
        }
    }

    const onkeyEnter = (event) => {
        if(event.key === "Enter")
            setSearch()
    }

    const reload = () => {
        setShowTableSearchNHVT(false)
        setKeySearch({
            search: ''
        })
    }

    return (
        <>
            <Modal 
                show={showModalNhvt}
                onHide={closeDialog}
                dialogClassName ="modal-80w"
                aria-labelledby ="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Danh mục nhóm hàng hóa
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {/* <form> */}
                        <div className='container-fluid'>
                            <div className='row'>
                                <button  
                                    className="btn-search-Dmdvt"
                                    onClick={setSearch}
                                >
                                Tìm kiếm 
                                </button>


                                <div className="col-sm-4">
                                    <span className="fa fa-search form-control-feedback"></span>
                                    <input
                                        type="search" 
                                        className="form-control formInput" 
                                        style={{height:'35px' , fontSize:'15px'}}
                                        name="search" 
                                        placeholder="Nhập từ khóa tìm kiếm"
                                        value={search} 
                                        onChange={onChangeSearch} 
                                        onKeyDown={onkeyEnter}
                                    />
                                </div>

                                <button 
                                        type="button" 
                                        className="button_Body" 
                                        onClick={showModalAdd}
                                    >Thêm (F2)</button>&ensp;

                                <button 
                                        type="button" 
                                        className="button_Body_Refresh" 
                                        onClick={reload}
                                    >
                                        <img
                                            src={iconRefresh}
                                            alt='iconRefresh'
                                            // width='30'
                                            height='24'
                                            className='mr-2' 
                                /> </button>&ensp;
                            </div>
                        </div>

                        { !showTableSearchNHVT && <PaginationNHVT /> }
                        { showTableSearchNHVT && <PaginationSearchNHVT /> }
            
                    {/* </form> */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalDmnhvt
