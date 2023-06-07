import { useContext , useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'

import { AppContext } from '../../../contexts/AppContext'
import PaginationDVT from '../Dmdvt/PaginationDVT'
import PaginationSearchDvt from '../Dmdvt/PaginationSearchDvt'

import iconRefresh from '../../../assets/refresh.svg'

const ModalDmdvt = () => {

    // Contexts 
    const {
        get_DVT ,
        find_DVT_Full ,

        showModalDvt ,
        setShowModalDvt ,

        setShowAddDVTModal ,

        setCurrentPageModal ,

        setSizePageModal ,

        setPageNumberLimitModal ,

        setMaxPageNumberLimitModal ,

        setMinPageNumberLimitModal ,

        setShowTableSearchDVT ,
        showTableSearchDVT 

    } = useContext(AppContext)

    useEffect(() => get_DVT() , [])

    // Close
    const closeDialog = () => {
        setSizePageModal(5)
        setCurrentPageModal(1)
        setPageNumberLimitModal(5)
        setMaxPageNumberLimitModal(5)
        setMinPageNumberLimitModal(0)
        setShowModalDvt(false)
        setShowTableSearchDVT(false)
        setKeySearch({
            search: ''
        })
    }

    // useEffect(() => {
    //     const handleEsc = (event) => {
    //         if(event.keyCode === 113) {
    //             console.log(showModalDvt)
    //             if(showModalDvt) {
    //                 setShowAddDVTModal(true)
    //             }
    //         }
    //     }
    //     window.addEventListener('keydown', handleEsc);
    
    //     return () => {
    //       window.removeEventListener('keydown', handleEsc);
    //     };
    // }, []);

    // Modal add
    const showModalAdd = () => {
        setShowTableSearchDVT(false)
        setKeySearch({
            search: ''
        })
        setShowAddDVTModal(true)
    }

    // Form search 
    const [keySearch , setKeySearch] = useState({
        search: ''
    })

    const {search} = keySearch

    const onChangeSearch = event => setKeySearch({...keySearch , [event.target.name] : event.target.value })

    const setSearch = async event => {
        if(keySearch.search !== '') {
            await find_DVT_Full(keySearch)
            setCurrentPageModal(1)
            setShowTableSearchDVT(true)
        }
    }

    const onkeyEnter = (event) => {
        if(event.key === "Enter")
            setSearch()
    }

    const reload = () => {
        setShowTableSearchDVT(false)
        setKeySearch({
            search: ''
        })
    }

    return (
        <>
            <Modal 
                show={showModalDvt}
                onHide={closeDialog}
                dialogClassName ="modal-80w"
                aria-labelledby ="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Danh mục đơn vị tính
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

                        { !showTableSearchDVT && <PaginationDVT /> }
                        { showTableSearchDVT && <PaginationSearchDvt /> }
            
                    {/* </form> */}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ModalDmdvt
