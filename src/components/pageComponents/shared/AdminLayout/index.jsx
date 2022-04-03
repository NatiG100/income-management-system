import React from 'react';
import Drawer from '../Drawer';
import { StyledAdminLayout } from './style';

const AdminLayout = ({ children }) => {
    return (
        <StyledAdminLayout>
            <Drawer />
            <>
                {children}
            </>
        </StyledAdminLayout>
    );
}

export default AdminLayout;