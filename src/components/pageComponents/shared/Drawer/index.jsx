import React, { useEffect, useState } from 'react';
import {
    StyledMenuItem,
    StyledDrawer,
} from './style';
import { useRouter } from 'next/router';
import { useLazyAxios } from '../../../../utils/lazyHTTP';
import { LOGOUT, ME } from '../../../../constants/end-points/auth';
import Dialogbox from '../../../UIComponents/DialogBox';

const Drawer = () => {
    ////logout logic
    const router = useRouter();
    const [logout, { loading, error, data }] = useLazyAxios({ ...LOGOUT });
    const requestLogout = async () => {
        const success = await logout();
        if (success) {
            router.replace('/super-admin/login');
        }
    }

    const path = router.pathname;
    const page = path.includes('transactions') ? "transactions" :
        path.includes('payment-methods') ? "payment" :
            "dashboard";
    const [openLogoutPrompt, setOpenLogoutPrompt] = useState(false);
    return (
        <StyledDrawer>
            {openLogoutPrompt && <Dialogbox
                prompt={"Are you sure you want to log out?"}
                title='Logout'
                action={requestLogout}
                onClose={() => setOpenLogoutPrompt(false)}
            />}
            <h2>Menu</h2>
            <StyledMenuItem
                selected={page === "dashboard"}
                onClick={() => { if (page !== "dashboard") router.push('/admin') }}
            >
                <p>Dashboard</p>
            </StyledMenuItem>
            <StyledMenuItem
                selected={page === 'transactions'}
                onClick={() => { if (page !== "transactions") router.push('/admin/transactions') }}
            >
                <p>Transactions</p>
            </StyledMenuItem>
            <StyledMenuItem
                selected={page === "payment"}
                onClick={() => { if (page !== "payment") router.push('/admin/payment-methods') }}
            >
                <p>Payment Methods</p>
            </StyledMenuItem>
            <StyledMenuItem
                selected={false}
                onClick={() => setOpenLogoutPrompt(true)}
            >
                <p>Logout</p>
            </StyledMenuItem>
        </StyledDrawer>
    )
}

export default Drawer;