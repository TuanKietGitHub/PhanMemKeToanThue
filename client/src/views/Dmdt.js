
import { useContext, useEffect } from 'react';

import FormSearchDT from '../Dashboard/Dmdt/FormSearchDT'
import ButtonBodyDT from '../Dashboard/Dmdt/ButtonBodyDT'
import PaginationDT from '../Dashboard/Dmdt/PaginationDT';
import { AppContext } from '../contexts/AppContext';

const Dmdt = () => {

    // Contexts
    const {
        get_DT 
    } = useContext(AppContext)

    useEffect(() => get_DT() , [])

    // useEffect(() => {
    //     const handleEsc = (event) => {
    //         if(event.keyCode === 113) {
                
    //         }
    //     }
    //     window.addEventListener('keydown', handleEsc);
    
    //     return () => {
    //       window.removeEventListener('keydown', handleEsc);
    //     };
    // }, []);

    let body = null

    body = (
        <>
            {/* <div className='container-fluid'>
                <div className='row'>
                    <div className='header'>
                       <p>CÔNG TY TNHH SX TM LÂM NGUYỄN</p>
                    </div>
                </div>
            </div> */}

            <div className='container-fluid'>
                <div className='row'>
                    <div className = 'title' style={{paddingTop:'10px' , paddingBottom:'10px'}} >
                        <h5>Đối tượng</h5>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-sm-3">
                        <FormSearchDT />
                    </div>

                    <ButtonBodyDT />
                </div>
            </div>

            {<PaginationDT />}
            {/* { !showTableSearch && <Pagination /> }
            { showTableSearch && <PaginationSearch /> } */}
        </>
    )

    return (
        <>
            {body}
        </>
    )
}

export default Dmdt
