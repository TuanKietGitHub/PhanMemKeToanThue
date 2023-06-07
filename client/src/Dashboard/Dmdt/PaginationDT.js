import { useContext } from "react"
import TableHeader from "../../components/layout/TableHeader"
import { AppContext } from "../../contexts/AppContext"

import ActionButtonsDT from "../Dmdt/ActionButtonsDT";

const PaginationDT = () => {

    // Contexts
    const {
        appState: {
            List_DT
        } , 
        currentPageDT ,
        setCurrentPageDT ,

        sizePageDT ,
        setSizePageDT ,

        pageNumberLimitDT ,

        maxPageNumberLimitDT ,
        setMaxPageNumberLimitDT ,

        minPageNumberLimitDT ,
        setMinPageNumberLimitDT ,


    } = useContext(AppContext)

    const headersDmdt = [
        {name: "Mã đối tượng" , field: "Ma_dt" , size: "90px"} ,
        {name: "Tên đối tượng" , field: "Ten_dt" , size: "250px"} ,
        {name: "Mã nhóm" , field: "Ma_nh_dt" , size: "50px"},
        {name: "Mã số thuế" , field: "Ma_so_thue" , size: "100px"} ,
        {name: "Địa chỉ" , field: "Dia_chi" , size: "230px"}
    ]

    const handleChange = event => setSizePageDT(event.target.value)

    const pages = [];
    for( let i = 1 ; i <= Math.ceil(List_DT.length/sizePageDT) ; i++ ) {
        pages.push(i);
    }

    const handleClick = (event) => {
        setCurrentPageDT(Number(event.target.id));
    }

    const indexOfLastItem = currentPageDT * sizePageDT ;
    const indexOfFirstItem = indexOfLastItem - sizePageDT ;
    const currentItems = List_DT.slice(indexOfFirstItem , indexOfLastItem) ;

    const renderPageNumbers = pages.map((number) => {
        if(number < maxPageNumberLimitDT+1 && number > minPageNumberLimitDT) {
            return (
                <li 
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className = {currentPageDT === number ? "active" : null}
                >
                    {number}
                </li>
            );
        }
        else {
            return null;
        }
    })

    const handleNextbtn = () => {
        setCurrentPageDT(currentPageDT + 1);
        if(currentPageDT + 1 > maxPageNumberLimitDT ) {
            setMaxPageNumberLimitDT(maxPageNumberLimitDT + pageNumberLimitDT) ;
            setMinPageNumberLimitDT(minPageNumberLimitDT + pageNumberLimitDT) ;
        }
    };

    const handlePrevbtn = () => {
        setCurrentPageDT(currentPageDT -1);
        if( (currentPageDT - 1) % pageNumberLimitDT === 0) {
            setMaxPageNumberLimitDT(maxPageNumberLimitDT - pageNumberLimitDT);
            setMinPageNumberLimitDT(minPageNumberLimitDT - pageNumberLimitDT);
        } 
    };

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimitDT) {
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimitDT >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>
    }

    return (
        <>
           <div className='container-fluid'>
                <div className='row formPagination'>
                    <label className="col-sm-1 col-form-label pagination-lable">Page size:</label>
                    <div className="col-sm-2 ">
                        <select className="form-select pagination-select">
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
                                    disabled = {currentPageDT === pages[0] ? true : false}
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
                                    disabled = {currentPageDT === pages[pages.length-1] ? true : false}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                <table className="table table-hover table table-bordered table-data">
                    <thead className='table-header'>
                        <tr>
                            <th width='20px'> </th>
                            <th width='20px'> </th>
                            <TableHeader headers={headersDmdt} />
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        { currentItems.map((item , index)  => (
                            <tr key={index}>
                                <ActionButtonsDT _id={item.Ma_dt} />
                                <th scope='row'>{item.Ma_dt}</th>
                                <td>{item.Ten_dt}</td>
                                <td>{item.Ma_nh_dt}</td>
                                <td>{item.Ma_so_thue}</td>
                                <td>{item.Dia_chi}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )

}

export default PaginationDT