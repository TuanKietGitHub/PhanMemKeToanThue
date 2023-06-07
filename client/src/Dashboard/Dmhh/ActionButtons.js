import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const ActionButtons = ({_id}) => {
    // Contexts 
    const {
        setShowDeleteHHModal , 
        setTypeDelete ,
        find_VT ,

        setShowUpdateHHModal ,

        find_DVT ,
        showModalDvt ,
        setShowUpdateDVTModal ,

        find_NHVT ,
        showModalNhvt ,
        setShowUpdateNHVTModal ,

        find_TK ,
        showModalTK ,
        setShowUpdateTKModal

    } = useContext(AppContext)

    // Set Delete Supplies (_id)
    const setModalDelete = () => {
        setTypeDelete(_id) 
        setShowDeleteHHModal(true)
    }

    const setModalUpdate = () => {
        if(showModalDvt) {
            find_DVT(_id)
            setShowUpdateDVTModal(true)
        }
        else if(showModalNhvt) {
            find_NHVT(_id)
            setShowUpdateNHVTModal(true)
        }
        else if(showModalTK) {
            find_TK(_id) 
            setShowUpdateTKModal(true)
        }
        else {
            find_VT(_id)
            setShowUpdateHHModal(true)
        }
    }

    return (
        <>
            <td>
                <button 
                        type="button" 
                        className="set-button"  
                        onClick={setModalUpdate} >Sửa</button>
            </td>
            <td>
                <button type="button" className="set-button" onClick={setModalDelete} >Xóa</button>
            </td>
        </>
    )
}

export default ActionButtons
