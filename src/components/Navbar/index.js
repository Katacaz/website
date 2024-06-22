import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import logo from '../../assets/img/logo.png'; // Import the image

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/"> 
                    <img src={logo} alt="Logo" height="50px" />
                    Katacaz Gaming
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>
                            About Me
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='projects'>
                            Projects
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='content'>
                            Content Creation
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='reviews'>
                            Reviews
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/contact">Contact Me</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar
