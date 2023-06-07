import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const ButtonBody = () => {

    // Contexts 
    const {
        setShowAddHHModal ,
        setCurrentPage ,
        setSizePage ,
        setPageNumberLimit ,
        setMaxPageNumberLimit ,
        setMinPageNumberLimit ,
        setShowTableSearch ,
        setKeySearch
    } = useContext(AppContext)

    const showModal = () => {
        setShowAddHHModal(true);
        setCurrentPage(1);
        setSizePage(10);
        setPageNumberLimit(5);
        setMaxPageNumberLimit(5);
        setMinPageNumberLimit(0);
        setShowTableSearch(false);
        setKeySearch({
            search: ''
        })
    }

    const reload = () => {
        window.location.reload()
    }

    return (
        <div 
            className="col-sm-2 col-l-6" 
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

export default ButtonBody
