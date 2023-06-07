import { Route } from "react-router-dom"

import NavbarMenu from "../layout/NavbarMenu"

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (<>
            <div className='app-header'>
                <NavbarMenu/>
            </div>
            <Component {...rest} {...props} />
            </>)} 
        />
    )
}

export default ProtectedRoute


