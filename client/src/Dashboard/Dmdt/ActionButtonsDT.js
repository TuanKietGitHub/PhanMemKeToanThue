import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"


const ActionButtonsDT = ({_id}) => {

    // Contexts 
    const {

    } = useContext(AppContext)


    // Set ActionButton (_id)
    const setModalDelete = () => {

    }

    const setModalUpdate = () => {

    }

    return (
        <>
            <td>
                <div className= "actionButton-DT">
                <button 
                        type="button" 
                        className="set-button"  
                        onClick={setModalUpdate} >Sửa</button>
                </div>
            </td>
            <td>
                <button type="button" className="set-button" onClick={setModalDelete} >Xóa</button>
            </td>
        </>
    )

}

export default ActionButtonsDT