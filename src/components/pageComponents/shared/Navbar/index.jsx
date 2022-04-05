import React from 'react';
import {
    StyledNavbar,
    StyledBrand,
    StyledNavigation,
    StyledNavItem,
} from './style';
import RoundButton from '../../../UIComponents/RoundButton';
import Input from '../../../UIComponents/Input';

const Navbar = ({ query, setQuery }) => {
    return (
        <StyledNavbar>
            <StyledBrand>IMS</StyledBrand>
            <StyledNavigation>
                <StyledNavItem selected={false}>Home</StyledNavItem>
                <StyledNavItem selected={true}>Payment</StyledNavItem>
                <StyledNavItem selected={false}>Contact Us</StyledNavItem>
                <StyledNavItem selected={false}>About Us</StyledNavItem>
            </StyledNavigation>
            <RoundButton
                text='SignIn'
                color='secondary'
            />
        </StyledNavbar>
    );
}

export default Navbar;
