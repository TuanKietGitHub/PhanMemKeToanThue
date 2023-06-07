import { useContext , useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import { AppContext } from '../../../contexts/AppContext'

import iconRefresh from '../../../assets/refresh.svg'
import PaginationTK from '../Dmtk/PaginationTK'
import PaginationSearchTK from '../Dmtk/PaginationSearchTK'

const ModalDmtk = () => {

    // Contexts 
    const {
        get_TK ,
        find_TK_Full ,

        showModalTK ,
        setShowModalTK ,

        setShowAddTKModal ,

        setCurrentPageModal ,

        setSizePageModal ,

        setPageNumberLimitModal ,

        setMaxPageNumberLimitModal ,

        setMinPageNumberLimitModal ,

        showTableSearchTK ,
        setShowTableSearchTK ,

        setStatus_TKVT ,
        setStatus_TKGV ,
        setStatus_TKDT 

    } = useContext(AppContext)

    useEffect(() => get_TK() , [])

    // Close
    const closeDialog = () => {
        setSizePageModal(5)
        setCurrentPageModal(1)
        setPageNumberLimitModal(5)
        setMaxPageNumberLimitModal(5)
        setMinPageNumberLimitModal(0)

        setShowModalTK(false)
        setShowTableSearchTK(false)
        setKeySearch({
            search: ''
        })

        setStatus_TKVT(false)
        setStatus_TKGV(false)
        setStatus_TKDT(false)
    }

    // Modal add
    const showModalAdd = () => {
        setShowTableSearchTK(false)
        setKeySearch({
            search: ''
        })
        setShowAddTKModal(true)
    }

    // Form search 
    const [keySearch , setKeySearch] = useState({
        search: ''
    })

    const {search} = keySearch

    const onChangeSearch = event => setKeySearch({...keySearch , [event.target.name] : event.target.value })

    const setSearch = async event => {
        if(keySearch.search !== '') {
            await find_TK_Full(keySearch)
            setCurrentPageModal(1)
            setShowTableSearchTK(true)
        }
    }

    const onkeyEnter = (event) => {
        if(event.key === "Enter")
            setSearch()
    }

    const reload = () => {
        setShowTableSearchTK(false)
        setKeySearch({
            search: ''
        })
    }

    return (
        <>
            <Modal 
                show={showModalTK}
                onHide={closeDialog}
                dialogClassName ="modal-80w"
                aria-labelledby ="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Danh mục tài khoản 
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

                        { !showTableSearchTK && <PaginationTK /> }
                        { showTableSearchTK && <PaginationSearchTK /> }
            
                    {/* </form> */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalDmtk
