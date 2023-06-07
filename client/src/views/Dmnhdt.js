import PaginationNHDT from "../Dashboard/Dmnhdt/PaginationNHDT"
import PaginationSearchNHDT from "../Dashboard/Dmnhdt/PaginationSearchNHDT"
import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/AppContext"
import ButtonBodyNHDT from "../Dashboard/Dmnhdt/ButtonBodyNHDT"
import AddNHDTModal from "../Dashboard/Dmnhdt/AddNHDTModal"
import UpdateNHDTModal from "../Dashboard/Dmnhdt/UpdateNHDTModal"
import DeleteNHDTModal from "../Dashboard/Dmnhdt/DeleteNHDTModal"
import FormSearchNHDT from "../Dashboard/Dmnhdt/FormSearchNHDT"

const Dmnhdt = () => {

    // Context 
    const {
        appState: {
            find_NhomDoiTuong
        } ,

        get_NHDT ,

        showTableSearchNHDT ,

        setShowAddNHDTModal
    } = useContext(AppContext)

    useEffect(() => get_NHDT() , [])

    useEffect(() => {
        const handleEsc = (event) => {
            if(event.keyCode === 113) {
                setShowAddNHDTModal(true)
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
                        <h5>Nhóm đối tượng</h5>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-sm-3">
                        <FormSearchNHDT />
                    </div>

                    <ButtonBodyNHDT />
                </div>
            </div>
            
            { !showTableSearchNHDT && <PaginationNHDT />}
            { showTableSearchNHDT && <PaginationSearchNHDT /> }

        </>
    )

    return (
        <>
            {body}
            <AddNHDTModal />
            { find_NhomDoiTuong !== null && <UpdateNHDTModal /> }
            <DeleteNHDTModal />
        </>
    )
}

export default Dmnhdt
