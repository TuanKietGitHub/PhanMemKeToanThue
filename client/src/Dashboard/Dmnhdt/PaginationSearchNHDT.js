import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

import TableHeader from "../../components/layout/TableHeader";
import ActionButtonsNHDT from "./ActionButtonsNHDT";

const PaginationSearchNHDT = () => {

     // Contexts
     const {
        appState: {
            Find_NHDT
        },
        currentPageNHDT ,
        setCurrentPageNHDT ,

        sizePageNHDT , 
        setSizePageNHDT ,

        pageNumberLimitNHDT ,

        maxPageNumerLimitNHDT ,
        setMaxPageNumberLimitNHDT ,

        minPageNumberLimitNHDT ,
        setMinPageNumberLimitNHDT ,

    } = useContext(AppContext)

    const headersDmnhdt = [
        {name: "Mã nhóm" , field: "Ma_nh_dt" , size: "200px"},
        {name: "Tên nhóm đối tượng" , field: "Ten_nh_dt" , size: "500px"}
    ];

    const handleChange = event => setSizePageNHDT(event.target.value)

    const pages = [];
    for( let i = 1 ; i <= Math.ceil(Find_NHDT.length/sizePageNHDT) ; i++ ) {
        pages.push(i);
    }

    const handleClick = (event) => {
        setCurrentPageNHDT(Number(event.target.id));
    };

    const indexOfLastItem = currentPageNHDT * sizePageNHDT;
    const indexOfFirstItem = indexOfLastItem - sizePageNHDT;
    const currentItems = Find_NHDT.slice(indexOfFirstItem , indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if(number < maxPageNumerLimitNHDT+1 && number > minPageNumberLimitNHDT) {
            return (
                <li 
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className = {currentPageNHDT === number ? "active" : null}
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
        setCurrentPageNHDT(currentPageNHDT + 1);
        if ( currentPageNHDT + 1 > maxPageNumerLimitNHDT ) {
            setMaxPageNumberLimitNHDT(maxPageNumerLimitNHDT + pageNumberLimitNHDT);
            setMinPageNumberLimitNHDT(minPageNumberLimitNHDT + pageNumberLimitNHDT);
        }
    };

    const handlePrevbtn = () => {
        setCurrentPageNHDT(currentPageNHDT -1);
        if( (currentPageNHDT - 1) % pageNumberLimitNHDT === 0) {
            setMaxPageNumberLimitNHDT(maxPageNumerLimitNHDT - pageNumberLimitNHDT);
            setMinPageNumberLimitNHDT(minPageNumberLimitNHDT - pageNumberLimitNHDT);
        } 
    };

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumerLimitNHDT) {
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimitNHDT >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>
    }

    let body

    if(Find_NHDT.length === 0) {
        body = (
            <>
            <div className='container-fluid'>
                <div className='row'>
                    <table className="table table-hover table-bordered table-data table-Nhdt">
                        <thead className='table-header'>
                            <tr>
                                <th width='20px'> </th>
                                <th width='20px'> </th>
                                <TableHeader headers={headersDmnhdt} />
                            </tr>
                        </thead>
                    </table>
                    <div>
                        <p style={{textAlign:'center', fontFamily: 'Arial' , fontSize: '15px' , maxWidth: '500px'}}> Không tìm thấy kết quả nào phù hợp </p>
                    </div>
                </div>
            </div>
            </>
        )
    } else {
        body = (
            <>
            <div className='container-fluid'>
                <div className='row'>
                <table className="table table-hover table-bordered table-data table-Nhdt">
                    <thead className='table-header'>
                        <tr>
                            <th width='20px'> </th>
                            <th width='20px'> </th>
                            <TableHeader headers={headersDmnhdt} />
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        { currentItems.map((item , index)  => (
                            <tr key={index}>
                                <ActionButtonsNHDT _id={item.Ma_nh_dt} />
                                <th scope='row'>{item.Ma_nh_dt}</th>
                                <td>{item.Ten_nh_dt}</td>
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

    return (
        <>
            <div className='container-fluid'>
                <div className='row formPagination'>
                    <label className="col-sm-1 col-form-label pagination-lable">Page size:</label>
                    <div className="col-sm-2 ">
                        <select className="form-select pagination-select" value={sizePageNHDT} onChange={handleChange}>
                            <option value={5} className="pagination-option">5</option>
                            <option value={10} className="pagination-option">10</option>
                            <option value={15} className="pagination-option">15</option>
                        </select>
                    </div>
                    <div className="col-sm-8" >
                        <ul className="pagination pagination-sm justify-content-end pageNumbersNHDT">
                            <li>
                                <button
                                    onClick={handlePrevbtn}
                                    disabled = {currentPageNHDT === pages[0] ? true : false}
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
                                    disabled = {currentPageNHDT === pages[pages.length-1] ? true : false}
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

export default PaginationSearchNHDT
