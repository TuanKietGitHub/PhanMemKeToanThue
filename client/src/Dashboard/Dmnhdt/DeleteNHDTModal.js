import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { Modal } from 'react-bootstrap'

const DeleteNHDTModal = () => {

    // Contexts 
    const {
        appState: {
            List_NHDT
        } ,
        delete_NHDT ,

        showDeleteNHDTModal ,
        setShowDeleteNHDTModal ,

        TypeDelete ,
        setTypeDelete ,

        sizePageNHDT ,
        currentPageNHDT ,
        setCurrentPageNHDT
    } = useContext(AppContext)

    // Close
    const closeDialog = () => {
        setShowDeleteNHDTModal(false)
        setTypeDelete(null)
    }

    // Submit 
    const onSubMit = async event => {
        event.preventDefault()
        const {success} = await delete_NHDT(TypeDelete)
        if(success) {
            closeDialog()
            const indexOfLastItem = currentPageNHDT * sizePageNHDT;
            const indexOfFirstItem = indexOfLastItem - sizePageNHDT;
            const currentItems = List_NHDT.slice(indexOfFirstItem , indexOfLastItem);
            if(currentItems.length === 1 && currentPageNHDT > 1) {
                setCurrentPageNHDT(currentPageNHDT - 1)
            }
        }
    }

    return (
        <>
        <Modal 
            show={showDeleteNHDTModal}
            onHide={closeDialog}
            aria-labelledby ="example-custom-modal-styling-title" 
        >
            <Modal.Body>
                <form onSubmit={onSubMit}> 
                    <div className="modal-body" >
                        Bạn có muốn xóa dòng này?
                    </div>

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-success">Xóa</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeDialog} >Hủy</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default DeleteNHDTModal
