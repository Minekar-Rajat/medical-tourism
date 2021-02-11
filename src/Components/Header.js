import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';


const Header = () => {

    const [isOpen, setisOpen] = useState(true);

    const toggle = () => setisOpen(!isOpen);




    return (
        <div >
            <Navbar className='nav-clr' light expand='md'>
                <NavbarBrand href="/" className="mr-auto"><img src='../images/medicaltourism1.png' className='img-fluid rounded ' height='80' width='300' /></NavbarBrand>
                <NavbarToggler onClick={toggle} className="mr-2 ml-auto" />
                <Collapse isOpen={!isOpen} navbar >

                    <Nav navbar className='mx-auto '>
                        <NavItem>
                            <NavLink className='mx-2 ' href='/home'><h5 >Home</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-2' href='/destination'><h5>Destinations</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-2' href='/treatment'><h5>Treatment</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-2' href='/doctors'><h5>Doctors</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='mx-2' href='/centers'><h5>Medical Centers</h5></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );

}

export default Header;