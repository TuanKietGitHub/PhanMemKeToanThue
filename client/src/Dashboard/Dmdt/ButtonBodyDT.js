import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const ButtonBodyDT = () => {
    
    // Contexts
    const {
        setShowAddNHDTModal ,
        setShowTableSearchNHDT ,
        setCurrentPageNHDT ,
        setSizePageNHDT ,
        setPageNumberLimitNHDT ,
        setMaxPageNumberLimitNHDT ,
        setMinPageNumberLimitNHDT ,
        setKeySearch
    } = useContext(AppContext)

    // Modal them
    const showModal = () => {
        setShowAddNHDTModal(true)
        setShowTableSearchNHDT(false);
        setCurrentPageNHDT(1)
        setSizePageNHDT(5);
        setPageNumberLimitNHDT(5);
        setMaxPageNumberLimitNHDT(5);
        setMinPageNumberLimitNHDT(0); 
        setKeySearch({
            search: ''
        }) 
    }

    // Refresh
    const reload = () => {
        window.location.reload()
    }

    return (
        <div 
            className="col-sm-2" 
            style={{ textAlign:'center'}}
        >
            <button 
                type="button" 
                className="button_Body" 
                onClick={showModal}
            >Thêm (F2)</button>&ensp;
                        
            <button
                type="button" 
                className="button_Body"
                onClick={reload}
            >Refresh</button>

        </div>
    )
}

export default ButtonBodyDT
