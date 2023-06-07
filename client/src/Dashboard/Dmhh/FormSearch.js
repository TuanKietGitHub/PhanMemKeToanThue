import React, { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const FormSearch = () => {

    // Contexts
    const {
        find_HH_Full ,
        setShowTableSearch ,
        setCurrentPage ,

        keySearch ,
        setKeySearch
    } = useContext(AppContext)

    // useState
    // const [keySearch , setKeySearch] = useState({
    //     search: ''
    // })

    const {search} = keySearch

    const onChangeSearch = event => setKeySearch({...keySearch , [event.target.name] : event.target.value })

    const setSearch = async event => {
        if(keySearch.search !== '') {
            await find_HH_Full(keySearch)
            setCurrentPage(1)
            setShowTableSearch(true)
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
                {/* <div className="input-group-btn">
                    <button  
                            className="IconSearch"
                            onClick={setSearch}
                            
                        >
                        <img    src={iconSearch} 
                                alt='logoutIcon' 
                                width='20' height='20' 
                                className='mr-2'
                        />
                    </button>
                </div> */}
            </div>
        
        {/* <form onSubmit={setSearch} action="#">
            <div className="input-group">
                <span className="fa fa-search form-control-feedback"></span>
                <input type="search" className="form-control formInput" placeholder="Search" name="search" value={search} onChange={onChangeSearch} />
                <div className="input-group-btn">
                    <button 
                            type="submit" 
                            className="IconSearch"
                        >
                        <img    src={iconSearch} 
                                alt='logoutIcon' 
                                width='20' height='20' 
                                className='mr-2'
                        />
                    </button>
                </div>
            </div>
        </form> */}
        </>
    )
}

export default FormSearch
