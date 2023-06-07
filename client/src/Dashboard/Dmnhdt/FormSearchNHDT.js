import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const FormSearchNHDT = () => {

    // Contexts
    const {
        find_NHDT_Full ,
        setShowTableSearchNHDT ,
        setCurrentPageNHDT ,

        keySearch ,
        setKeySearch
    } = useContext(AppContext)

    const {search} = keySearch

    const onChangeSearch = event => setKeySearch({...keySearch , [event.target.name] : event.target.value })

    const setSearch = async event => {
        if(keySearch.search !== '') {
            await find_NHDT_Full(keySearch)
            setCurrentPageNHDT(1)
            setShowTableSearchNHDT(true)
        }
    }

    const onkeyEnter = (event) => {
        if(event.key === "Enter")
            setSearch()
    }

    return (
        <>
            <div className="input-group">
                <div className="input-group-btn">
                    <button  
                            className="button_Body_Refresh"
                            onClick={setSearch}
                            
                        >
                    Lọc
                    </button>
                </div>

                <span className="fa fa-search form-control-feedback"></span>
                <input 
                        type="search" 
                        className="form-control formInput" 
                        style={{height:'35px'}}
                        placeholder="Tìm kiếm" 
                        name="search" 
                        value={search} 
                        onChange={onChangeSearch} 
                        onKeyDown={onkeyEnter}
                />
            </div>
        </>
    )
}

export default FormSearchNHDT
