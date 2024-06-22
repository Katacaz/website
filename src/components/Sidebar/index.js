import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle} >
        <CloseIcon>

        </CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
            <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
            <SidebarLink to='content' onClick={toggle}>Content Creation</SidebarLink>
            <SidebarLink to='reviews' onClick={toggle}>Reviews</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/contact">Contact Me</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
