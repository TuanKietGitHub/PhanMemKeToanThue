import { React,  useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import TableHeader from '../../components/layout/TableHeader'
import ActionButtons from './ActionButtons'

const Pagination = () => {

    // Contexts
    const {
        appState: {
            List_HH
        },
        currentPage ,
        setCurrentPage ,

        sizePage , 
        setSizePage ,

        pageNumberLimit ,

        maxPageNumerLimit ,
        setMaxPageNumberLimit ,

        minPageNumberLimit ,
        setMinPageNumberLimit ,

    } = useContext(AppContext)

    const headersDmhh = [
        {name: "Mã Vật Tư" , field: "Ma_vt" , size: "100px"},
        {name: "Tên Vật Tư" , field: "Ten_vt" , size: "300px"},
        {name: "Đơn Vị Tính" , field: "Dvt" , size: "80px"},
        {name: "Mã nhóm" , field: "Ma_nh" , size: "80px"},
        {name: "Giá mua" , field: "Gia_mua" , size: "100px"},
        {name: "Giá bán min" , field: "Gia_ban" , size: "100px"},
        {name: "Giá bán max" , field: "Gia_ban4" , size: "100px"},
        {name: "Ts" , field: "Ts" , size: "30px"}
        
    ];

    const handleChange = event => setSizePage(event.target.value)

    const pages = [];
    for( let i = 1 ; i <= Math.ceil(List_HH.length/sizePage) ; i++ ) {
        pages.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const indexOfLastItem = currentPage * sizePage;
    const indexOfFirstItem = indexOfLastItem - sizePage;
    const currentItems = List_HH.slice(indexOfFirstItem , indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if(number < maxPageNumerLimit+1 && number > minPageNumberLimit) {
            return (
                <li 
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className = {currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        }
        else {
            return null;
        }
    });

    // const renderPageNumbers = pages.map((number) => {
    //     if(number < maxPageNumerLimit+1 && number > minPageNumberLimit) {
    //         return (
    //             <li 
    //                 key={number}
    //                 className = "page-item"
    //             >
    //                 <a className="page-link" href="#page" id={number} onClick={handleClick}> {number} </a>
    //             </li>
    //         );
    //     }
    //     else {
    //         return null;
    //     }
    // });

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);
        if ( currentPage + 1 > maxPageNumerLimit ) {
            setMaxPageNumberLimit(maxPageNumerLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setCurrentPage(currentPage -1);
        if( (currentPage - 1) % pageNumberLimit === 0) {
            setMaxPageNumberLimit(maxPageNumerLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        } 
    };

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumerLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}>&hellip;</li>
    }


    return (
        <>
            <div className='container-fluid'>
                <div className='row formPagination'>
                    <label className="col-sm-1 col-form-label pagination-lable">Page size:</label>
                    <div className="col-sm-2 ">
                        <select className="form-select pagination-select" value={sizePage} onChange={handleChange}>
                            <option value={10} className="pagination-option">10</option>
                            <option value={15} className="pagination-option">15</option>
                            <option value={20} className="pagination-option">20</option>
                        </select>
                    </div>
                    <div className="col-sm-8" >
                        {/* <ul className="pagination pagination-sm justify-content-end">
                            <li className="page-item disabled"
                                onClick={handlePrevbtn}
                                disabled = {currentPage === pages[0] ? true : false}    
                            >
                                <a className="page-link" href="#prev">&laquo;</a>
                            </li>

                            {pageDecrementBtn}
                            {renderPageNumbers}
                            {pageIncrementBtn}

                            <li className="page-item"
                                onClick={handleNextbtn}
                                disabled = {currentPage === pages[pages.length-1] ? true : false}
                            >
                                <a className="page-link" href="#next">&raquo;</a>
                            </li>
                        </ul> */}

                        <ul className="pagination pagination-sm justify-content-end pageNumbers">
                            <li>
                                <button
                                    onClick={handlePrevbtn}
                                    disabled = {currentPage === pages[0] ? true : false}
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
                                    disabled = {currentPage === pages[pages.length-1] ? true : false}
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
                <table className="tableDT table table-hover table-bordered table-data">
                    <thead className='table-header'>
                        <tr>
                            <th width='20px'> </th>
                            <th width='20px'> </th>
                            <TableHeader headers={headersDmhh} />
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        { currentItems.map((item , index)  => (
                            <tr key={index}>
                                <ActionButtons _id={item.Ma_vt} />
                                <th scope='row'>{item.Ma_vt}</th>
                                <td>{item.Ten_vt}</td>
                                <td>{item.Dvt}</td>
                                <td>{item.Ma_nh}</td>
                                <td>{item.Gia_mua}</td>
                                <td>{item.Gia_ban}</td>
                                <td>{item.Gia_ban4}</td>
                                <td>{item.Ts}</td>
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

export default Pagination
