import React from 'react';
import { StyledClientLayout } from './style';
import Navbar from '../Navbar';

const ClientLayout = ({ children }) => {
    return (
        <StyledClientLayout>
            <Navbar />
            <div>
                {children}
            </div>
        </StyledClientLayout>
    );
}

export default ClientLayout;