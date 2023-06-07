import Modal from 'react-bootstrap/Modal'

import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const DeleteHHModal = () => {

    const {
        showDeleteHHModal ,
        setShowDeleteHHModal ,

        TypeDelete ,
        setTypeDelete ,

        detele_HH ,

        showModalDvt ,
        delete_DVT ,

        showModalNhvt ,
        delete_NHVT ,

        showModalTK ,
        delete_TK ,

        sizePage ,
        currentPage ,
        setCurrentPage ,

        sizePageModal ,
        currentPageModal ,
        setCurrentPageModal ,

        appState: {
            List_DVT ,
            List_HH ,
            List_NHVT ,
            List_TK
        }

    } = useContext(AppContext)

    const closeDialog = () => {
        setShowDeleteHHModal(false)
        setTypeDelete(null)
    }

    const onSubMit = async event => {
        event.preventDefault()
        if(showModalDvt) {
            // Delete
            const {success} =  await delete_DVT(TypeDelete)
            // Set pages 
            if(success) {
                closeDialog()
                const indexOfLastItem = currentPageModal * sizePageModal;
                const indexOfFirstItem = indexOfLastItem - sizePageModal;
                const currentItems = List_DVT.slice(indexOfFirstItem , indexOfLastItem);
                if(currentItems.length === 1 && currentPageModal > 1) {
                    setCurrentPageModal(currentPageModal - 1)
                }
            }
        }
        else if(showModalNhvt) {
            // Delete
            const {success} =  await delete_NHVT(TypeDelete)
            // Set pages 
            if(success) {
                closeDialog()
                const indexOfLastItem = currentPageModal * sizePageModal;
                const indexOfFirstItem = indexOfLastItem - sizePageModal;
                const currentItems = List_NHVT.slice(indexOfFirstItem , indexOfLastItem);
                if(currentItems.length === 1 && currentPageModal > 1) {
                    setCurrentPageModal(currentPageModal - 1)
                }
            }
        }
        else if(showModalTK) {
            // Delete
            const {success} =  await delete_TK(TypeDelete)
            // Set pages 
            if(success) {
                closeDialog()
                const indexOfLastItem = currentPageModal * sizePageModal;
                const indexOfFirstItem = indexOfLastItem - sizePageModal;
                const currentItems = List_TK.slice(indexOfFirstItem , indexOfLastItem);
                if(currentItems.length === 1 && currentPageModal > 1) {
                    setCurrentPageModal(currentPageModal - 1)
                }
            }
        }
        else {
            // Delete
            const {success} = await detele_HH(TypeDelete)
            // Set pages 
            if(success) {
                closeDialog()
                const indexOfLastItem = currentPage * sizePage;
                const indexOfFirstItem = indexOfLastItem - sizePage;
                const currentItems = List_HH.slice(indexOfFirstItem , indexOfLastItem);
                if(currentItems.length === 1 && currentPage > 1) {
                    setCurrentPage(currentPage - 1)
                }
            }
        }
    }
    

    return (
        <>
        <Modal 
            show={showDeleteHHModal}
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

export default DeleteHHModal
