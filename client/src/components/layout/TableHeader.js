import React from 'react'

const TableHeader = ({headers}) => {
    return (
        <>
        {/* <thead className='table-header'> */}
            {headers.map( (item , index) => (
                <th width={item.size} key={index}> {item.name} </th> 
            ) )}
        {/* </thead> */}
        </>
    )
}

export default TableHeader
