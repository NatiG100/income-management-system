import React, { useState, useEffect } from 'react';
import { getElementAtEvent } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { ME } from '../../../../constants/end-points/auth';
import { login } from '../../../../redux/slices/userSlice';
import { useLazyAxios } from '../../../../utils/lazyHTTP';
import Drawer from '../Drawer';
import { StyledAdminLayout } from './style';
import { useRouter } from 'next/router';

const AdminLayout = ({ children }) => {
    const router = useRouter();
    const [me, { loading: meLoading, error: meError, data: meData }] = useLazyAxios({ ...ME });
    const getMe = async () => {
        try {
            const data = await me();
        } catch (err) {
            router.replace('/super-admin/login');
        }
    }
    useEffect(() => {
        getMe();
    }, [])
    const dispatch = useDispatch();
    useEffect(() => {
        if (meData) {
            dispatch(login(meData));
        }
    }, [meData])
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