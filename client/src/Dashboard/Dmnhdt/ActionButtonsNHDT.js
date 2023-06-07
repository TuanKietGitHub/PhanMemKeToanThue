import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const ActionButtonsNHDT = ({_id}) => {

    // Contexts 
    const { 

        find_NHDT ,

        setTypeDelete ,
        setShowDeleteNHDTModal ,

        setShowUpdateNHDTModal
    } = useContext(AppContext)

    // Set Delete NHDT (_id)
    const setModalDelete = () => {
        setTypeDelete(_id) 
        setShowDeleteNHDTModal(true)
    }

    const setModalUpdate = () => {
        find_NHDT(_id)
        setShowUpdateNHDTModal(true)
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

export default ActionButtonsNHDT
