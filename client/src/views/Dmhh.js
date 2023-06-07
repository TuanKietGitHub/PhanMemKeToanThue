import { useContext , useEffect } from 'react'

import { AppContext } from '../contexts/AppContext'
import AddHHModal from '../Dashboard/Dmhh/AddHHModal'
import ButtonBody from '../Dashboard/Dmhh/ButtonBody'
import FormSearch from '../Dashboard/Dmhh/FormSearch'
import DeleteHHModal from '../Dashboard/Dmhh/DeleteHHModal'
import Pagination from '../Dashboard/Dmhh/Pagination'
import PaginationSearch from '../Dashboard/Dmhh/PaginationSearch'
import UpdateHHModal from '../Dashboard/Dmhh/UpdateHHModal'
import ModalDmdvt from '../Dashboard/Dmhh/LinkModal/ModalDmdvt'
import AddDVTModal from '../Dashboard/Dmhh/Dmdvt/AddDVTModal'
import UpdateDVTModal from '../Dashboard/Dmhh/Dmdvt/UpdateDVTModal'
import ModalDmnhvt from '../Dashboard/Dmhh/LinkModal/ModalDmnhvt'
import AddNHVTModal from '../Dashboard/Dmhh/Dmnhvt/AddNHVTModal'
import UpdateNHVTModal from '../Dashboard/Dmhh/Dmnhvt/UpdateNHVTModal'
import ModalDmtk from '../Dashboard/Dmhh/LinkModal/ModalDmtk'
import AddTKModal from '../Dashboard/Dmhh/Dmtk/AddTKModal'
import UpdateTKModal from '../Dashboard/Dmhh/Dmtk/UpdateTKModal'

const Dmhh = () => {

    // Contexts
    const {
        appState: {
            find_VatTu ,
            find_DonViTinh ,
            find_NhomVatTu ,
            find_TaiKhoan
        },
        get_HH ,
        showTableSearch ,
        setShowAddHHModal 
    } = useContext(AppContext)

    useEffect(() => get_HH() , [])

    useEffect(() => {
        const handleEsc = (event) => {
            if(event.keyCode === 113) {
                setShowAddHHModal(true)
            }
        }
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    let body = null

    body = (
        <>
            {/* <div className='container-fluid'>
                <div className='row'>
                    <div className='header'>
                       <p>CÔNG TY TNHH SX TM LÂM NGUYỄN</p>
                    </div>
                </div>
            </div> */}

            <div className='container-fluid'>
                <div className='row'>
                    <div className = 'title' style={{paddingTop:'10px' , paddingBottom:'10px'}} >
                        <h5>Hàng hóa</h5>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-sm-3">
                        <FormSearch />
                    </div>

                    <ButtonBody />
                </div>

                <div className='row' style={{paddingTop:'10px' , paddingLeft:'10px'}}>
                    <button 
                        type="button" 
                        className="button_Body"
                        style={{width: '75px'}}
                        >Excel</button>&ensp;
                                
                    <button
                        type="button" 
                        className="button_Body"
                        style={{width: '75px'}}
                    >Import</button>&ensp;

                    <button
                        type='button'
                        className='button_Body'
                        style={{width: '75px'}}
                        onClick="window.print()"
                    >Print</button>

                </div>
            </div>
            
            { !showTableSearch && <Pagination /> }
            { showTableSearch && <PaginationSearch /> }
        </>
    )

    return (
        <>
            {body}
            <AddHHModal />
            { find_VatTu !== null && <UpdateHHModal/>}
            <DeleteHHModal/>

            <ModalDmdvt />
            <AddDVTModal />
            { find_DonViTinh !== null && <UpdateDVTModal/>}

            <ModalDmnhvt />
            <AddNHVTModal />
            { find_NhomVatTu !== null && <UpdateNHVTModal />}

            <ModalDmtk />
            <AddTKModal />
            { find_TaiKhoan !== null && <UpdateTKModal />}
        </>
    )
}

export default Dmhh
