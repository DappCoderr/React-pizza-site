import React from 'react'
import {
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    SideBtnWrap
} from './SidebarElement';


function Index({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Oder Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Index
