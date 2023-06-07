import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'

import iconHome from '../../assets/home.jpg'
import myAccount from '../../assets/myAccount.png'
import iconLogOut from '../../assets/iconLogOut.png'
import account from '../../assets/account.jpg'
import iconHopThu from '../../assets/iconHopThu.jpg'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const NavbarMenu = () => {

    // Contexts
    const {
        setCurrentPage ,
        setSizePage ,
        setPageNumberLimit ,
        setMaxPageNumberLimit ,
        setMinPageNumberLimit ,
        setShowTableSearch ,

        setCurrentPageNHDT ,
        setSizePageNHDT ,
        setPageNumberLimitNHDT ,
        setMaxPageNumberLimitNHDT ,
        setMinPageNumberLimitNHDT ,
        setShowTableSearchNHDT ,

        setKeySearch
    } = useContext(AppContext)

    const linkHome = () => {
        window.location.reload();
    }

    const setPaginationHH = () => {
        setCurrentPage(1)
        setSizePage(10);
        setPageNumberLimit(5);
        setMaxPageNumberLimit(5);
        setMinPageNumberLimit(0);
        setShowTableSearch(false);
        setKeySearch({
            search: ''
        }) 
    }

    const setPaginationNHDT = () => {
        setCurrentPageNHDT(1)
        setSizePageNHDT(5);
        setPageNumberLimitNHDT(5);
        setMaxPageNumberLimitNHDT(5);
        setMinPageNumberLimitNHDT(0); 
        setShowTableSearchNHDT(false)
        setKeySearch({
            search: ''
        }) 
    }

    const setPaginationDT = () => {
        // setCurrentPageNHDT(1)
        // setSizePageNHDT(5);
        // setPageNumberLimitNHDT(5);
        // setMaxPageNumberLimitNHDT(5);
        // setMinPageNumberLimitNHDT(0);
        // setKeySearch({
        //     search: ''
        // }) 
    }

    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' className='shadow'>
            <Container>
                <Navbar.Brand to='/home' as={Link} className='font-weight-bolder text-white' >
                    <img
                        src={iconHome}
                        alt='iconHome'
                        width='32'
                        height='32'
                        className='mr-2' 
                    /> 
                    &nbsp;PMKT Online 
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link to='/home' as={Link} >Home</Nav.Link>   
                        <NavDropdown title = "Tài sản" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Link1</NavDropdown.Item>
                            <NavDropdown.Item >Link2</NavDropdown.Item>
                            <NavDropdown.Item >Link3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title = "Danh mục" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Nhóm hàng hóa</NavDropdown.Item>
                            <NavDropdown.Item onClick={setPaginationHH} to='/dmhh' as={Link} >Hàng hóa</NavDropdown.Item>
                            <NavDropdown.Item onClick={setPaginationNHDT} to='/dmnhdt' as={Link} >Nhóm đối tượng</NavDropdown.Item>
                            <NavDropdown.Item onClick={setPaginationDT} to='/dmdt' as={Link} >Đối tượng</NavDropdown.Item>
                            <NavDropdown.Item >Kho</NavDropdown.Item>
                            <NavDropdown.Item >Chi phí</NavDropdown.Item>
                            <NavDropdown.Item >Bộ phận</NavDropdown.Item>
                            <NavDropdown.Item >Sự kiện</NavDropdown.Item>
                            <NavDropdown.Item >Khóa sổ</NavDropdown.Item>
                            <NavDropdown.Item >Đơn vị tính</NavDropdown.Item>
                            <NavDropdown.Item >Hoạt động</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title = "Tiền lương" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Link1</NavDropdown.Item>
                            <NavDropdown.Item >Link2</NavDropdown.Item>
                            <NavDropdown.Item >Link3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title = "Giá thành" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Link1</NavDropdown.Item>
                            <NavDropdown.Item >Link2</NavDropdown.Item>
                            <NavDropdown.Item >Link3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title = "Hóa đơn" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Link1</NavDropdown.Item>
                            <NavDropdown.Item >Link2</NavDropdown.Item>
                            <NavDropdown.Item >Link3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title = "Hệ Thống" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Link1</NavDropdown.Item>
                            <NavDropdown.Item >Link2</NavDropdown.Item>
                            <NavDropdown.Item >Link3</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title = "Hóa đơn" id="collasible-nav-dropdown">
                            <NavDropdown.Item >Link1</NavDropdown.Item>
                            <NavDropdown.Item >Link2</NavDropdown.Item>
                            <NavDropdown.Item >Link3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className='d-flex' >
                    <NavDropdown title = {<img
                                                    src={iconHopThu}
                                                    alt='iconHome'
                                                    width='20'
                                                    height='15'
                                                    className='mr-2' 
                                                    onClick = {linkHome}
                                                /> } 
                                    id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title = {<img
                                                    src={myAccount}
                                                    alt='iconHome'
                                                    width='15'
                                                    height='15'
                                                    className='mr-2' 
                                                    onClick = {linkHome}
                                                /> } 
                                    id="collasible-nav-dropdown">
                            <NavDropdown.Item style={{fontSize:'14px'}}>
                                <img
                                    src={account}
                                    alt='iconHome'
                                    width='14'
                                    height='14'
                                    className='mr-2' 
                                /> 
                                &nbsp;My Account
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{fontSize:'14px'}}>
                                <img
                                    src={iconLogOut}
                                    alt='iconHome'
                                    width='16'
                                    height='16'
                                    className='mr-2' 
                                /> 
                                &nbsp;Log out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu
