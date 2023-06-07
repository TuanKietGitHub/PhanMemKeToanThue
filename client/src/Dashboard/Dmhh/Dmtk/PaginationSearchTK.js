import { useContext } from 'react'

import TableHeader from '../../../components/layout/TableHeader';
import { AppContext } from '../../../contexts/AppContext';
import ActionButtons from '../ActionButtons';

const PaginationSearchTK = () => {

    // Contexts 
    const {
        appState: {
            Find_TK
        } ,

        setShowModalTK ,

        currentPageModal ,
        setCurrentPageModal ,

        sizePageModal ,
        setSizePageModal ,

        pageNumberLimitModal ,

        maxPageNumerLimitModal ,
        setMaxPageNumberLimitModal ,

        minPageNumberLimitModal ,
        setMinPageNumberLimitModal ,

        setDataAdd_TKVT ,
        setDataUpdate_TKVT ,
        
        setDataAdd_TKGV ,
        setDataUpdate_TKGV ,

        setDataAdd_TKDT ,
        setDataUpdate_TKDT ,

        Status_TKVT ,
        Status_TKGV ,
        Status_TKDT ,

        setStatus_TKVT ,
        setStatus_TKGV ,
        setStatus_TKDT ,

        showAddHHModal ,
        showUpdateHHModal

    } = useContext(AppContext)

    const headersTK = [
        {name: "Tài khoản" , field: "Tk" , size: "200px"} ,
        {name: "Tên tài khoản" , field: "Ten_tk" , size: "400px"} ,
        {name: "Tk công nợ" , field: "Tk_dt" , size: "200px"} ,
        {name: "Tk ngoại tệ" , field: "Tk_nt" , size: "200px"}
    ];

    // Data Onclick row
    const dataOnclick = (data) => {

        if(Status_TKVT) {
            if(showAddHHModal) {
                setDataAdd_TKVT({
                    Tk_vt: data.Tk ,
                    Ten_Tkvt: data.Ten_tk
                })
                setShowModalTK(false)
                setStatus_TKVT(false)
            } else if(showUpdateHHModal) {
                setDataUpdate_TKVT({
                    Tk_vt: data.Tk ,
                    Ten_Tkvt: data.Ten_tk
                })
                setShowModalTK(false)
                setStatus_TKVT(false)
            } else {
                setShowModalTK(false)
                setStatus_TKVT(false)
            }

        } else if (Status_TKGV) {
            if(showAddHHModal) {
                setDataAdd_TKGV({
                    Tk_gv: data.Tk ,
                    Ten_Tkgv: data.Ten_tk
                })
                setShowModalTK(false)
                setStatus_TKGV(false)
            } else if(showUpdateHHModal) {
                setDataUpdate_TKGV({
                    Tk_gv: data.Tk ,
                    Ten_Tkgv: data.Ten_tk
                })
                setShowModalTK(false)
                setStatus_TKGV(false)
            } else {
                setShowModalTK(false)
                setStatus_TKVT(false)
            }

        } else if(Status_TKDT) {
            if(showAddHHModal) {
                setDataAdd_TKDT({
                    Tk_dt: data.Tk ,
                    Ten_Tkdt: data.Ten_tk
                })
                setShowModalTK(false)
                setStatus_TKDT(false)
            } else if(showUpdateHHModal) {
                setDataUpdate_TKDT({
                    Tk_dt: data.Tk ,
                    Ten_Tkdt: data.Ten_tk
                })
                setShowModalTK(false)
                setStatus_TKDT(false)
            } else {
                setShowModalTK(false)
                setStatus_TKVT(false)
            }

        }  else {
            setShowModalTK(false) 
            setStatus_TKVT(false)
            setStatus_TKGV(false)
            setStatus_TKDT(false)
        }  
    }

    // Panination
    const handleChange = event => setSizePageModal(event.target.value)

    const pages = [];
    for( let i = 1 ; i <= Math.ceil(Find_TK.length/sizePageModal) ; i++ ) {
        pages.push(i);
    }

    const handleClick = (event) => {
        setCurrentPageModal(Number(event.target.id));
    };

    const indexOfLastItem = currentPageModal * sizePageModal;
    const indexOfFirstItem = indexOfLastItem - sizePageModal;
    const currentItems = Find_TK.slice(indexOfFirstItem , indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if(number < maxPageNumerLimitModal+1 && number > minPageNumberLimitModal) {
            return (
                <li 
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className = {currentPageModal === number ? "active" : null}
                >
                    {number}
                </li>
            );
        }
        else {
            return null;
        }
    });

    const handleNextbtn = () => {
        setCurrentPageModal(currentPageModal + 1);
        if ( currentPageModal + 1 > maxPageNumerLimitModal ) {
            setMaxPageNumberLimitModal(maxPageNumerLimitModal + pageNumberLimitModal);
            setMinPageNumberLimitModal(minPageNumberLimitModal + pageNumberLimitModal);
        }
    };

    const handlePrevbtn = () => {
        setCurrentPageModal(currentPageModal -1);
        if( (currentPageModal - 1) % pageNumberLimitModal === 0) {
            setMaxPageNumberLimitModal(maxPageNumerLimitModal - pageNumberLimitModal);
            setMinPageNumberLimitModal(minPageNumberLimitModal - pageNumberLimitModal);
        } 
    };

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumerLimitModal) {
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimitModal >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>
    }


    let body = null 

    if(Find_TK.length === 0) {
        body = (
            <div className='container-fluid'>
                <div className='row'>
                    <table className="table table-hover table-bordered table-data">
                        <thead className='table-header'>
                            <tr>
                                <th width='100px'> </th>
                                <th width='100px'> </th>
                                    <TableHeader headers={headersTK} />
                                </tr>
                                   
                        </thead>
                    </table>

                        <p style={{textAlign:'center', fontFamily: 'Arial'}}> Không tìm thấy kết quả nào phù hợp </p>
                   
                </div>
            </div>
        )
    }
    else {
        body = (
            <div className='container-fluid'>
                <div className='row'>
                    <table className="table table-hover table-bordered table-data">
                        <thead className='table-header'>
                            <tr>
                                <th width='100px'> </th>
                                <th width='100px'> </th>
                                    <TableHeader headers={headersTK} />
                            </tr>
                                   
                        </thead>
                        <tbody className='table-body'>
                            { currentItems.map((item , index)  => (
                                <tr key={index}>
                                    <ActionButtons _id={item.Tk} />
                                    <td onClick={() => dataOnclick(item)}>{item.Tk}</td>
                                    <td onClick={() => dataOnclick(item)}>{item.Ten_tk}</td>
                                    <td onClick={() => dataOnclick(item)}>{item.Tk_dt}</td>
                                    <td onClick={() => dataOnclick(item)}>{item.Tk_nt}</td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row formPagination'>
                    <label className="col-sm-2 col-form-label pagination-lable">Page size:</label>
                    <div className="col-sm-2 ">
                        <select className="form-select pagination-select" value={sizePageModal.value} onChange={handleChange}>
                            <option value={5} className="pagination-option">5</option>
                            <option value={10} className="pagination-option">10</option>
                            <option value={15} className="pagination-option">15</option>
                        </select>
                    </div>
                                
                    <div className="col-sm-8" >
                        <ul className="pagination pagination-sm justify-content-end pageNumbers">
                            <li>
                                <button
                                    onClick={handlePrevbtn}
                                    disabled = {currentPageModal === pages[0] ? true : false}
                                >
                                    Prev
                                </button>
                            </li>

                                {pageDecrementBtn}
                                {renderPageNumbers}
                                {pageIncrementBtn}

                            <li>
                                <button
                                    onClick={handleNextbtn}
                                    disabled = {currentPageModal === pages[pages.length-1] ? true : false}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {body}
        </>
    )
}

export default PaginationSearchTK
